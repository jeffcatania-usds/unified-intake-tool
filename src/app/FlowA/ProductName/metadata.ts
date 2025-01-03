"use client";

import { ScreenMetadata } from "@/_utils/ScreenMetadata";
import ProductNameReview from "./review";

export const ProductNameMetadata = {
  name: "ProductName",
  route: "/FlowA/ProductName",
  title: "Product",
  shouldDisplay: () => {
    return true;
  },
  reviewSection: ProductNameReview,
} as ScreenMetadata;
