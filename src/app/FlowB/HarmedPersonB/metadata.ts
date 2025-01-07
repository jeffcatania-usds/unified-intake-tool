"use client";

import { ScreenMetadata } from "@/_utils/ScreenMetadata";
import { UserData, SUBMISSION_TYPE } from "@/_contexts/UserDataProvider";
import HarmedPersonBReview from "./review";

export const HarmedPersonBMetadata = {
  name: "HarmedPersonB",
  route: "/FlowB/HarmedPersonB",
  title: "Who was harmed",
  shouldDisplay: (userData: UserData) => {
    return userData[SUBMISSION_TYPE]?.includes(
      "someoneWasHarmedSubmissionType",
    );
  },
  reviewSection: HarmedPersonBReview,
} as ScreenMetadata;
