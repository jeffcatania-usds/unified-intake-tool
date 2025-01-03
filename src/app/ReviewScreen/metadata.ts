"use client";

import { ScreenMetadata } from "@/_utils/ScreenMetadata";

export const ReviewScreenMetadata = {
  name: "ReviewScreen",
  route: "/ReviewScreen",
  title: "Review your submission",
  shouldDisplay: () => {
    return true;
  },
} as ScreenMetadata;
