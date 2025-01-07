"use client";

import { ScreenMetadata } from "@/_utils/ScreenMetadata";
import ProductReview from "./review";

export const ProductMetadata = {
  name: "Product",
  route: "/FlowB/Product",
  title: "The product",
  shouldDisplay: () => {
    return true;
  },
  reviewSection: ProductReview,
} as ScreenMetadata;
