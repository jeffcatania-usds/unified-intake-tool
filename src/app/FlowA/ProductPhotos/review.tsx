"use client";

import {
  PRODUCT_PHOTOS,
  useUserDataContext,
} from "@/_contexts/UserDataProvider";
import { ProductPhotosMetadata } from "./metadata";
import ReviewSection from "@/_components/ReviewSection";

export default function ProductPhotosReview() {
  const { userData } = useUserDataContext();

  return (
    <ReviewSection metadata={ProductPhotosMetadata}>
      {userData[PRODUCT_PHOTOS] ? userData[PRODUCT_PHOTOS] : "None"}
    </ReviewSection>
  );
}
