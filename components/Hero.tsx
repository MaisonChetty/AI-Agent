import React from 'react'
import AgentPulse from './AgentPulse'
import YoutubeVideoForm from './YoutubeVideoForm'

function Hero() {
  return (
    <div>
        <section className="py-20"
                 style={{
                   background: 'linear-gradient(to bottom, #000000, #434343)', /* Dark gradient for space theme */
                   color: '#ffffff' /* Light text for readability */
                 }}>
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center gap-10 text-center mb-12">
                    <AgentPulse size="large" color="blue"/>

                    <h1 className="text-4xl md:text-6xl font-bold md:mb-6"
                        style={{ color: '#ffffff' }}> {/* White text for heading */}
                    Meet Your Personal {""}
                    <span style={{
                          background: 'linear-gradient(90deg, #007CF0, #00DFD8)', /* Blue-green gradient for dynamic text */
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent'
                        }}>
                        AI Content Agent
                    </span>
                    </h1>

                    <p className="text-xl mb-8 max-w-2xl mx-auto"
                       style={{
                         color: '#cccccc' /* Lighter grey text for paragraph */
                       }}>
                    Transform your video content with AI-powered analysis,
                    transcription, and insights. Get started in seconds.
                    </p>

                    {/* YoutubeVideoForm with default styles */}
                    <YoutubeVideoForm/>
                </div>
            </div>

        </section>
    </div>
  )
}

export default Hero
