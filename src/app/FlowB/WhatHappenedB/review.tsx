"use client";

import {
  PRODUCT_PHOTOS,
  PRODUCT_NAME,
  NDC_NUMBER,
  WHAT_HAPPENED,
  EVENT_DATE,
  ADDITIONAL_FILES,
  useUserDataContext,
} from "@/_contexts/UserDataProvider";
import { WhatHappenedBMetadata } from "./metadata";
import ReviewSection from "@/_components/ReviewSection";

export default function WhatHappenedBReview() {
  const { userData } = useUserDataContext();

  return (
    <ReviewSection metadata={WhatHappenedBMetadata}>
      Product photos:{" "}
      {userData[PRODUCT_PHOTOS] ? userData[PRODUCT_PHOTOS] : "None"}
      <br />
      Product name: {userData[PRODUCT_NAME]}
      <br />
      NDC number: {userData[NDC_NUMBER] ? userData[NDC_NUMBER] : "Not provided"}
      <br />
      Description: {userData[WHAT_HAPPENED]}
      <br />
      Date: {userData[EVENT_DATE]}
      <br />
      Date: {userData[ADDITIONAL_FILES] ? userData[ADDITIONAL_FILES] : "None"}
      <br />
    </ReviewSection>
  );
}
