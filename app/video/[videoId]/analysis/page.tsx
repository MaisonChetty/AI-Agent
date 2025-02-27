"use client"

import StarsCanvas from "@/components/background";
import ChatForm from "@/components/Chat";
import ThumbnailGeneration from "@/components/ThumbnailGeneration";
import TitleGenerations from "@/components/TitleGenerations";
import Transcription from "@/components/Transcription";
import Usage from "@/components/Usage";
import YoutubeVideoDetails from "@/components/YoutubeVideoDetails";
import { FeatureFlag } from "@/features/flags";
import { useParams } from "next/navigation";

function AnalysisPage() {
    const params = useParams<{videoId:string}>()
    const {videoId} = params

    return (
      <div className="@container mx-auto px-4 md:px-0 ">
        <StarsCanvas/>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 z-10 backdrop-blur-xs  ">
          
          {/* Left Side */}
          <div className="order-2 lg:order-1 flex flex-col gap-4 lg:border-r border-gray-800 dark:border-blue-400 p-6">
            
            {/* Analysis Section */}

            <div className=" flex flex-col
            gap-4 p-4 border  border-gray-800 dark:border-blue-400 rounded-xl">
                <Usage 
                    featureFlag={FeatureFlag.ANALYSE_VIDEO}
                    title="Analyse Video"
                />
                {/* Video Transcription status */}
            </div>

            {/* Youtube video details */}

                <YoutubeVideoDetails videoId={videoId} />

            {/* Thumbnail Generation */}

            <ThumbnailGeneration videoId={videoId} />

            {/* Title Generation */}

            <TitleGenerations videoId={videoId} />

            {/* Transcription */}

            <Transcription videoId={videoId} />
            <p>Cool stuff</p>
  
          </div>
  
          {/* Right Side */}
          <div className="order-1  lg:order-2 lg:sticky lg:top-20 h-[500px] md:h-[calc(100vh-6rem)]">
            
            {/* AI Agent Chat Section */}
            <ChatForm/>
  
          </div>
  
        </div>
      </div>
    );
  }
  
  export default AnalysisPage;
  