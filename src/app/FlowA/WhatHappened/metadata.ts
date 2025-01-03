"use client";

import { ScreenMetadata } from "@/_utils/ScreenMetadata";

export const WhatHappenedMetadata = {
  name: "WhatHappened",
  route: "/FlowA/WhatHappened",
  title: "Describe what happened in detail",
  shouldDisplay: () => {
    return true;
  },
} as ScreenMetadata;
