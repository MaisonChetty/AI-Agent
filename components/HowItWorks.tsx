import { Brain, MessageSquare, Video } from 'lucide-react';
import React from 'react'

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

function HowItWorks() {
  return (
    <div>
            <section className="py-20 bg-gray-600">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
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
    </div>
  )
}

export default HowItWorks
