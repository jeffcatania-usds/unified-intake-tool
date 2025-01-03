"use client";

import { BARCODE, useUserDataContext } from "@/_contexts/UserDataProvider";
import { ScanBarcodeMetadata } from "./metadata";
import ReviewSection from "@/_components/ReviewSection";

export default function ScanBarcodeReview() {
  const { userData } = useUserDataContext();

  return (
    <ReviewSection metadata={ScanBarcodeMetadata}>
      {userData[BARCODE] ? userData[BARCODE] : "None"}
    </ReviewSection>
  );
}
