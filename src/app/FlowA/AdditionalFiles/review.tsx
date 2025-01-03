"use client";

import {
  ADDITIONAL_FILES,
  useUserDataContext,
} from "@/_contexts/UserDataProvider";
import { AdditionalFilesMetadata } from "./metadata";
import ReviewSection from "@/_components/ReviewSection";

export default function AdditionalFilesReview() {
  const { userData } = useUserDataContext();

  return (
    <ReviewSection metadata={AdditionalFilesMetadata}>
      {userData[ADDITIONAL_FILES] ? userData[ADDITIONAL_FILES] : "None"}
    </ReviewSection>
  );
}
