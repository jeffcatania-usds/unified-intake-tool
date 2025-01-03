"use client";

import { ScreenMetadata } from "@/_utils/ScreenMetadata";

export const EventDateMetadata = {
  name: "EventDate",
  route: "/FlowA/EventDate",
  title: "When did this happen?",
  shouldDisplay: () => {
    return true;
  },
} as ScreenMetadata;
