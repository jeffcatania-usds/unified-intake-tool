"use client";

import { ScreenMetadata } from "@/_utils/ScreenMetadata";
import ProductPhotosReview from "./review";

export const ProductPhotosMetadata = {
  name: "ProductPhotos",
  route: "/FlowA/ProductPhotos",
  title: "Upload product photos",
  shouldDisplay: () => {
    return true;
  },
  reviewSection: ProductPhotosReview,
} as ScreenMetadata;
