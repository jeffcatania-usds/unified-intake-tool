"use client";

import { ScreenMetadata } from "@/_utils/ScreenMetadata";
import ContactInfoReview from "./review";

export const ContactInfoMetadata = {
  name: "ContactInfo",
  route: "/FlowA/ContactInfo",
  title: "Can we contact you?",
  shouldDisplay: () => {
    return true;
  },
  reviewSection: ContactInfoReview,
} as ScreenMetadata;
