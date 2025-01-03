"use client";

import { EVENT_DATE, useUserDataContext } from "@/_contexts/UserDataProvider";
import { EventDateMetadata } from "./metadata";
import ReviewSection from "@/_components/ReviewSection";

export default function EventDateReview() {
  const { userData } = useUserDataContext();

  return (
    <ReviewSection metadata={EventDateMetadata}>
      {userData[EVENT_DATE]}
    </ReviewSection>
  );
}
