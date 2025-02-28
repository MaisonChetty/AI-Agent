"use client";

import { FeatureFlag } from "@/features/flags";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Usage from "./Usage";
import {useQuery} from "convex/react"
import { api } from "@/convex/_generated/api";

function ThumbnailGeneration({ videoId }: { videoId: string }) {
  const { user } = useUser();

  const images = useQuery(api.images.getImages, {
    videoId,
    userId: user?.id ?? "",
  })
  return (
<div className="rounded-xl flex flex-col p-4 border-2  bg-gray-200 dark:bg-gray-900 border-blue-600 dark:border-blue-400">
  <div className="min-w-52">
    <Usage
      featureFlag={FeatureFlag.IMAGE_GENERATION}
      title="Thumbnail Generation"
    />
  </div>

  {/* Simple horizontal scroll for images */}
  <div className={`flex overflow-x-auto  gap-4 ${images?.length && "mt-4"}`}>
    {images?.map((image) =>
      image.url && (
        <div key={image._id}
        className=" flex-none w-[200px] h-[110px]  rounded-lg overflow-x-auto">
            <Image
                src={image.url}
                alt="Generated Image"
                width={200}
                height={200}
                className="object-cover"

            />
        </div>
      )
    )}
  </div>

    {/* No images generated yet */}
    {!images?.length &&(
        <div className="text-center py-8 px-4 rounded-lg mt-4 border-2
        border-dashed border-gray-800 dark:border-gray-200">
            <p className="text-gray-500 dark:text-gray-100">No thumbnails have been generated yet</p>
            <p className="text-sm text-gray-400 dark:text-gray-200 mt-1">
                Generate thumnails to see them apear here
            </p>

        </div>
    )}
</div>

  );
}

export default ThumbnailGeneration;
