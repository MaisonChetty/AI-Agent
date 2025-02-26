import StarsCanvas from "@/components/background";
import Hero from "@/components/Hero";
import { Brain, ImageIcon, MessageSquare, Sparkles, Video } from "lucide-react";

const steps = [
  {
    title: "1. Connect Your Content",
    description: "Share your YouTube video URL and let your agent get to work",
    icon: Video,
  },
  {
    title: "2. AI Agent Analysis",
    description: "Your personal agent analyzes every aspect of your content",
    icon: Brain,
  },
  {
    title: "3. Receive Intelligence",
    description: "Get actionable insights and strategic recommendations",
    icon: MessageSquare,
  },
];

const features = [
  {
    title: "Ai Analysis",
    description:
    "get deep insight into your video content with out advanced AI analysis. Understand viewer engagement and content quality.",
    icon: Brain,
    iconBg:"bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Smart Transcription",
    description: 
      "Get accurate transcriptions of your videos. Perfect for creating subtitles, blog posts, or repurposing content.",
    icon: MessageSquare,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  
  {
    title: "Thumbnail Generation",
    description: 
      "Generate eye-catching thumbnails using AI. Boost your click-through rates with compelling visuals.",
    icon: ImageIcon,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    title: "Title Generation",
    description: 
      "Create attention-grabbing, SEO-optimized titles for your videos using AI. Maximize views with titles that resonate with your audience.",
    icon: MessageSquare,
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  
  {
    title: "Shot Script",
    description: 
      "Get detailed, step-by-step instructions to recreate viral videos. Learn shooting techniques, angles, and editing tips from successful content.",
    icon: Video,
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
  },
  
  {
    title: "Discuss with Your AI Agent",
    description: 
      "Engage in deep conversations about your content strategy, brainstorm ideas, and unlock new creative possibilities with your AI agent companion.",
    icon: Sparkles,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
]


export default function Home() {
  return (
    <div className="min-h-screen space-background">
      <StarsCanvas/>
      {/* Hero section */}
      <Hero/>

      {/* Features section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Powerful Features for Content Creators
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="feature-card p-6 rounded-xl">
                  <div className={`w-12 h-12 feature-icon-bg rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white"/>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-black">{feature.title}</h3>
                  <p className="text-black">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 bg-gray-600">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet Your AI Agent in 3 Simple Steps
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="step-card text-center p-6 rounded-xl">
                  <div className="w-16 h-16 step-icon-bg rounded-full flex items-center justify-center mx-auto mb-4 border-2">
                    <Icon className="w-8 h-8 text-white"/>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-50">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

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

