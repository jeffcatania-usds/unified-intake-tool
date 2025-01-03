"use client";

import { ScreenMetadata } from "@/_utils/ScreenMetadata";

export const ScanBarcodeMetadata = {
  name: "ScanBarcode",
  route: "/FlowA/ScanBarcode",
  title: "Scan barcode",
  shouldDisplay: () => {
    return true;
  },
} as ScreenMetadata;
