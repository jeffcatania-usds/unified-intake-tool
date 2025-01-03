"use client";

import { ScreenMetadata } from "@/_utils/ScreenMetadata";

export const SubmissionTypeMetadata = {
  name: "SubmissionType",
  route: "/FlowA/SubmissionType",
  title: "Tell us what happened",
  shouldDisplay: () => {
    return true;
  },
} as ScreenMetadata;
