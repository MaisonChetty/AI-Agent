"use client"
import React from 'react'
import { Brain, ImageIcon, MessageSquare, Sparkles, Video } from "lucide-react";

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

function Features() {
  return (
    <div>
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
    </div>
  )
}

export default Features
