"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
// @ts-expect-error: maath/random does not have proper TypeScript definitions
import * as random from "maath/random/dist/maath-random.esm";
import * as THREE from "three";
import { useTheme } from "next-themes"; // Import useTheme

const StarBackground: React.FC = () => {
  const ref = useRef<THREE.Points>(null);
  const { theme } = useTheme(); // Access the current theme

  // Generate stars safely
  const [sphere] = useState<Float32Array>(() => {
    try {
      const positions = random.inSphere(new Float32Array(5000 * 3), { radius: 1.2 });
      if (!positions || positions.length === 0) {
        console.warn("Generated empty star positions, using fallback.");
        return new Float32Array([0, 0, 0]); // Fallback point
      }
      return positions;
    } catch (error) {
      console.error("Error generating star positions:", error);
      return new Float32Array([0, 0, 0]); // Fallback
    }
  });

  // Rotate stars slowly
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  // Set star color based on the current theme
  const starColor = theme === "dark" ? "#fff" : "#000"; // White for dark mode, black for light mode

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color={starColor}
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas: React.FC = () => (
  <div className="w-full h-full overflow-y-hidden fixed inset-0 z-[-1] bg-gray-200 dark:bg-black ">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
      <Preload all />
    </Canvas>
  </div>
);

export default StarsCanvas;
