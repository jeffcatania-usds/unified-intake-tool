"use client";

import { ScreenMetadata } from "@/_utils/ScreenMetadata";
import WhatHappenedReview from "./review";

export const WhatHappenedMetadata = {
  name: "WhatHappened",
  route: "/FlowA/WhatHappened",
  title: "Describe what happened in detail",
  shouldDisplay: () => {
    return true;
  },
  reviewSection: WhatHappenedReview,
} as ScreenMetadata;
