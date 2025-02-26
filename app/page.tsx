import StarsCanvas from "@/components/background";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";



export default function Home() {
  return (
    <div className="min-h-screen space-background">
      <StarsCanvas/>
      {/* Hero section */}
      <Hero/>

      {/* Features section */}
        <Features/>

      {/* How it Works Section */}
        <HowItWorks/>

      {/* Footer section */}

      <section className="py-20 px-4 md:px-0">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Meet Your AI Content Agent?
          </h2>
          <p className="text-xl">
            Join creators leveraging AI to unlock content insights
          </p>
        </div>
      </section>

    </div>
  );
}

