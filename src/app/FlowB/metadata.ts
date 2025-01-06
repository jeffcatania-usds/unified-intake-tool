"use client";

import { ScreenMetadata } from "@/_utils/ScreenMetadata";

export const FlowBMetadata = {
  name: "FlowBOverview",
  route: "/FlowB",
  title: "Report a problem",
  shouldDisplay: () => {
    return true;
  },
} as ScreenMetadata;
