"use client"

import { getVideoDetails } from '@/actions/getVideoDetails';
import { VideoDetails } from '@/types/types';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

function SidebarYoutubeVideoDetails({ videoId }: {videoId:string}) {
    const [video, setVideo] = useState<VideoDetails | null>(null);

    useEffect(() => {
        const fetchVideoDetails = async () =>{
            const video = await getVideoDetails(videoId)
            setVideo(video)
        }

        fetchVideoDetails();
    }, [videoId])

    if (!video) return (<div className='flex
        justify-center items-center p-4'>
            <div className='w-8 h-8 border-4 border-gray-300 border-t-blue-500
            rounded-full animate-spin'>

            </div></div>)


  return (
    <div className='@container bg-gray-200 border-2 border-blue-600 dark:bg-gray-900 dark:border-purple-400 rounded-xl p-1'>
        <div className='flex flex-col'>
            {/* Video Thumnail */}
            <div className='flex-shrink-0 '>
                <Image
                    src={video.thumbnail}
                    alt={video.title}
                    width={500}
                    height={500}
                    className='
                    w-full rounded-xl shadow-md hover:shadow-xl
                    transition-shadow duration-300'
                />
            </div>

            {/* Video Details */}
            <div className='flex-grow space-y-4'>
                {/* Channel Info */}
                <div className='flex items-center pl-2 gap-4'>
                    <Image
                        src={video.channel.thumbnail}
                        alt={video.channel.title}
                        width={48}
                        height={48}
                        className='w-10 h-10 @md:w-12 @md:h-12 rounded-full
                        border-2 border-gray-100'
                    />

                    <div>
                        <p className='text-base @md:text-lg font-semibold text-gray-900 dark:text-gray-200'>
                            {video.channel.title}
                        </p>
                        <p className='text-sm @md:text-base text-gray-600 dark:text-blue-200'>
                            {video.channel.subscribers} subscribers
                        </p>
                    </div>

                </div>

            </div>
        </div>
    </div>
  )
}

export default SidebarYoutubeVideoDetails
