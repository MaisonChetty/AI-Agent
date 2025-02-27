"use client"

import { ClerkProvider } from "@clerk/nextjs";
import { SchematicProvider } from "@schematichq/schematic-react";
import SchematicWrapped from "./SchematicWrapped";
import { ThemeProvider } from "@/components/theme-provider";
import { useEffect, useState } from 'react';
import { ConvexClientProvider } from "./ConvexClientProvider";

export default function ClientWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const [isClient, setIsClient] = useState(false);
    const [schematicPubKey, setSchematicPubKey] = useState('');

    // Mimic componentDidMount lifecycle with useEffect to ensure it only runs on the client
    useEffect(() => {
        setIsClient(true); // Set isClient to true when component mounts
        setSchematicPubKey(process.env.NEXT_PUBLIC_SCHEMATIC_PUBLISHABLE_KEY || '');
    }, []);

    if (!isClient) {
        return <div>Loading...</div>; // Early return to prevent server-side render of client-specific components
    }

    if (!schematicPubKey) {
        console.error("Schematic Publishable Key is missing");
        return <div>Configuration error. Please contact support.</div>;
    }

    return (
        <ConvexClientProvider>
            <SchematicProvider publishableKey={schematicPubKey}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <SchematicWrapped>
                        {children}
                    </SchematicWrapped>
                </ThemeProvider>
            </SchematicProvider>
        </ConvexClientProvider>
    );
}
