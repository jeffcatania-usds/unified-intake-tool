"use client";

import { ScreenMetadata } from "@/_utils/ScreenMetadata";

export const LandingMetadata = {
  name: "Landing",
  route: "/",
  title: "Report a problem",
  shouldDisplay: () => {
    return true;
  },
} as ScreenMetadata;
