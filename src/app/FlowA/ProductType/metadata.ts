"use client";

import { ScreenMetadata } from "@/_utils/ScreenMetadata";

export const ProductTypeMetadata = {
  name: "ProductType",
  route: "/FlowA/ProductType",
  title: "What was the product?",
  shouldDisplay: () => {
    return true;
  },
} as ScreenMetadata;
