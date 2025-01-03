"use client";

import { ScreenMetadata } from "@/_utils/ScreenMetadata";
import AdditionalFilesReview from "./review";

export const AdditionalFilesMetadata = {
  name: "AdditionalFiles",
  route: "/FlowA/AdditionalFiles",
  title: "Upload any additional information",
  shouldDisplay: () => {
    return true;
  },
  reviewSection: AdditionalFilesReview,
} as ScreenMetadata;
