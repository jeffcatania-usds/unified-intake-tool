"use client";

import { ScreenMetadata } from "@/_utils/ScreenMetadata";

export const ProductPhotosMetadata = {
  name: "ProductPhotos",
  route: "/FlowA/ProductPhotos",
  title: "Upload product photos",
  shouldDisplay: () => {
    return true;
  },
} as ScreenMetadata;
