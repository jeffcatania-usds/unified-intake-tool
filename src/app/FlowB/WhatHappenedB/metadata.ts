"use client";

import { ScreenMetadata } from "@/_utils/ScreenMetadata";

export const WhatHappenedBMetadata = {
  name: "WhatHappenedB",
  route: "/FlowB/WhatHappenedB",
  title: "What happened",
  shouldDisplay: () => {
    return true;
  },
} as ScreenMetadata;
