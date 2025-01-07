"use client";

import { PRODUCT_TYPE, useUserDataContext } from "@/_contexts/UserDataProvider";
import { ProductMetadata } from "./metadata";
import ReviewSection from "@/_components/ReviewSection";

export default function ProductPhotosReview() {
  const { userData } = useUserDataContext();

  return (
    <ReviewSection metadata={ProductMetadata}>
      {userData[PRODUCT_TYPE]}
    </ReviewSection>
  );
}
