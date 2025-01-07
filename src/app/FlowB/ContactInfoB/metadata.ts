"use client";

import { ScreenMetadata } from "@/_utils/ScreenMetadata";
import ContactInfoBReview from "./review";

export const ContactInfoBMetadata = {
  name: "ContactInfoB",
  route: "/FlowB/ContactInfoB",
  title: "How to reach you",
  shouldDisplay: () => {
    return true;
  },
  reviewSection: ContactInfoBReview,
} as ScreenMetadata;
