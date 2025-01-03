"use client";

import { ScreenMetadata } from "@/_utils/ScreenMetadata";
import ScanBarcodeReview from "./review";

export const ScanBarcodeMetadata = {
  name: "ScanBarcode",
  route: "/FlowA/ScanBarcode",
  title: "Scan barcode",
  shouldDisplay: () => {
    return true;
  },
  reviewSection: ScanBarcodeReview,
} as ScreenMetadata;
