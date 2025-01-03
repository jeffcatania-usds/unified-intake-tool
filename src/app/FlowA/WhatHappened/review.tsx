"use client";

import {
  WHAT_HAPPENED,
  useUserDataContext,
} from "@/_contexts/UserDataProvider";
import { WhatHappenedMetadata } from "./metadata";
import ReviewSection from "@/_components/ReviewSection";

export default function WhatHappenedReview() {
  const { userData } = useUserDataContext();

  return (
    <ReviewSection metadata={WhatHappenedMetadata}>
      {userData[WHAT_HAPPENED]}
    </ReviewSection>
  );
}
