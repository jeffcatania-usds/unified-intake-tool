"use client";

import { ScreenMetadata } from "@/_utils/ScreenMetadata";

export const AdditionalFilesMetadata = {
  name: "AdditionalFiles",
  route: "/FlowA/AdditionalFiles",
  title: "Upload any additional information",
  shouldDisplay: () => {
    return true;
  },
} as ScreenMetadata;
