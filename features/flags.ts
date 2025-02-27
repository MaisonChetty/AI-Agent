export enum FeatureFlag {
    TRANSCRIPTION = "transcriptions",
    IMAGE_GENERATION = "image-generation",
    ANALYSE_VIDEO = "analyse-video",
    TITLE_GENERATIONS = "title-generations",
    SCRIPT_GENERATION = "script-generation",
    SEO_ENGINE = "seo-engine"
  }
  
  export const featureFlagEvents: Record<FeatureFlag, { event: string }> = {
    [FeatureFlag.TRANSCRIPTION]: {
      event: "transcribe",
    },
    [FeatureFlag.IMAGE_GENERATION]: {
      event: "generate-image",
    },
    [FeatureFlag.ANALYSE_VIDEO]: {
      event: "analyse-video",
    },
    [FeatureFlag.TITLE_GENERATIONS]: {
      event: "generate-title",
    },
    [FeatureFlag.SCRIPT_GENERATION]: {
      event: "",
    },
    [FeatureFlag.SEO_ENGINE]: {
        event: "",
      },
  };
  