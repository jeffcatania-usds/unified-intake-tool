"use client";

import { ScreenMetadata } from "@/_utils/ScreenMetadata";

export const ContactInfoMetadata = {
  name: "ContactInfo",
  route: "/FlowA/ContactInfo",
  title: "Can we contact you?",
  shouldDisplay: () => {
    return true;
  },
} as ScreenMetadata;
