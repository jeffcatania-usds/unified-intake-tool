"use client";

import {
  PRODUCT_NAME,
  PRODUCT_TYPE,
  useUserDataContext,
} from "@/_contexts/UserDataProvider";
import { ProductNameMetadata } from "./metadata";
import ReviewSection from "@/_components/ReviewSection";

export default function ProductNameReview() {
  const { userData } = useUserDataContext();

  // TODO: Convert Product Type into a user friendly format

  return (
    <ReviewSection metadata={ProductNameMetadata}>
      {userData[PRODUCT_TYPE]}
      <br />
      {userData[PRODUCT_NAME]}
    </ReviewSection>
  );
}
