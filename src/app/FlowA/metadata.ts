"use client";

import { ScreenMetadata } from "@/_utils/ScreenMetadata";

export const FlowAMetadata = {
  name: "FlowAOverview",
  route: "/FlowA",
  title: "Report a problem",
  shouldDisplay: () => {
    return true;
  },
} as ScreenMetadata;
