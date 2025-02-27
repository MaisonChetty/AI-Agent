import { v } from "convex/values";
import { mutation, query } from "./_generated/server";




export const getImages = query({
    args: {
      userId: v.string(),
      videoId: v.string(),
    },
    handler: async (ctx, args) => {
      const images = await ctx.db
        .query("images") // Querying the "images" table
        .withIndex("by_user_and_video") // Using the index for efficient lookup
        .filter((q) => q.eq(q.field("userId"), args.userId)) // Match userId
        .filter((q) => q.eq(q.field("videoId"), args.videoId)) // Match videoId
        .collect(); // Retrieve all matching images as an array
  
        const imageUrls = await Promise.all(
            images.map(async (image) => ({
              ...image,
              url: await ctx.storage.getUrl(image.storageId),
            }))
          );
          
          return imageUrls;
    },
  });
  