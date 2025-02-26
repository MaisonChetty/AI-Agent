"use client"
import React from 'react'
import Form from "next/form"
import { motion } from 'framer-motion'
import AnalyseButton from './AnalyseButton'
import { analyseYoutubeVideo } from '@/actions/analyseYoutubeVideo'

function YoutubeVideoForm() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <Form action={analyseYoutubeVideo} className="flex flex-col sm:flex-row gap-2 items-center">
        
        {/* Animated Border Wrapper */}
        <motion.div 
          className="p-[2px] rounded-lg w-full flex-1"
          animate={{
            background: [
              "linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet)",
              "linear-gradient(45deg, violet, indigo, blue, green, yellow, orange, red)",
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <input
            name="url"
            type="text"
            placeholder="Enter YouTube URL"
            className="w-full px-4 py-2 text-gray-700 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </motion.div>

        <AnalyseButton />
      </Form>
    </div>
  )
}

export default YoutubeVideoForm
