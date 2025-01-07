"use client";

import {
  HARMED_AGE,
  HARMED_AGE_UNIT,
  HARMED_GENDER,
  HARMED_GENDER_SPECIFY,
  HARMED_MEDICAL,
  useUserDataContext,
} from "@/_contexts/UserDataProvider";
import { HarmedPersonBMetadata } from "./metadata";
import ReviewSection from "@/_components/ReviewSection";

export default function HarmedPersonBReview() {
  const { userData } = useUserDataContext();

  // TODO: map gender values back to display-friendly values

  return (
    <ReviewSection metadata={HarmedPersonBMetadata}>
      {userData[HARMED_AGE]
        ? userData[HARMED_AGE] + " " + userData[HARMED_AGE_UNIT]
        : "Age not provided"}
      <br />
      {userData[HARMED_GENDER]
        ? userData[HARMED_GENDER]
        : "Gender not provided"}{" "}
      {userData[HARMED_GENDER_SPECIFY]
        ? "(" + userData[HARMED_GENDER_SPECIFY] + ")"
        : ""}
      <br />
      {userData[HARMED_MEDICAL]
        ? userData[HARMED_MEDICAL]
        : "Medical details not provided"}
    </ReviewSection>
  );
}
