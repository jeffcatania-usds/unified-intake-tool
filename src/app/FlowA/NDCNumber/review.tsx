"use client";

import { NDC_NUMBER, useUserDataContext } from "@/_contexts/UserDataProvider";
import { NDCNumberMetadata } from "./metadata";
import ReviewSection from "@/_components/ReviewSection";

export default function NDCNumberReview() {
  const { userData } = useUserDataContext();

  return (
    <ReviewSection metadata={NDCNumberMetadata}>
      {userData[NDC_NUMBER] ? userData[NDC_NUMBER] : "Not provided"}
    </ReviewSection>
  );
}
