"use client";

import { ScreenMetadata } from "@/_utils/ScreenMetadata";
import EventDateReview from "./review";

export const EventDateMetadata = {
  name: "EventDate",
  route: "/FlowA/EventDate",
  title: "When did this happen?",
  shouldDisplay: () => {
    return true;
  },
  reviewSection: EventDateReview,
} as ScreenMetadata;
