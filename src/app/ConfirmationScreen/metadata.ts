"use client";

import { ScreenMetadata } from "@/_utils/ScreenMetadata";

export const ConfirmationScreenMetadata = {
  name: "ConfirmationScreen",
  route: "/ConfirmationScreen",
  title: "Report successfully submitted",
  shouldDisplay: () => {
    return true;
  },
} as ScreenMetadata;
