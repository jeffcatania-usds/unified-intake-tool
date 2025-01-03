"use client";

import { ScreenMetadata } from "@/_utils/ScreenMetadata";

export const ProductNameMetadata = {
  name: "ProductName",
  route: "/FlowA/ProductName",
  title: "Product name",
  shouldDisplay: () => {
    return true;
  },
} as ScreenMetadata;
