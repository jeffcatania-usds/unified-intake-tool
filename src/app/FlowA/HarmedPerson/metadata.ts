"use client";

import { ScreenMetadata } from "@/_utils/ScreenMetadata";
import { UserData, SUBMISSION_TYPE } from "@/_contexts/UserDataProvider";
import HarmedPersonReview from "./review";

export const HarmedPersonMetadata = {
  name: "HarmedPerson",
  route: "/FlowA/HarmedPerson",
  title: "Tell us about who was harmed",
  shouldDisplay: (userData: UserData) => {
    return userData[SUBMISSION_TYPE]?.includes(
      "someoneWasHarmedSubmissionType",
    );
  },
  reviewSection: HarmedPersonReview,
} as ScreenMetadata;
