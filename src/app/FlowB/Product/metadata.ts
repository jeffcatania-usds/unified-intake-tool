"use client";

import { ScreenMetadata } from "@/_utils/ScreenMetadata";

export const ProductMetadata = {
  name: "Product",
  route: "/FlowB/Product",
  title: "The product",
  shouldDisplay: () => {
    return true;
  },
} as ScreenMetadata;
