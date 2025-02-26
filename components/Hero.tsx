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
                    <AgentPulse size="large" color="purple"/>

                    <h1 className="text-4xl md:text-6xl font-bold md:mb-6"
                        style={{ color: '#ffffff' }}> {/* White text for heading */}
                    Discover Your Stellar {""}
                    <span style={{
                          background: 'linear-gradient(90deg, #2d95f7, #c723f0)', /* Blue-green gradient for dynamic text */
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
                    Revolutionize your video content with AI-powered analysis, transcription, 
                    and insights. Embark on a journey beyond the stars, 
                    unlocking new dimensions of creativity and understanding.
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
