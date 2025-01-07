"use client";

import { ScreenMetadata } from "@/_utils/ScreenMetadata";
import WhatHappenedBReview from "./review";

export const WhatHappenedBMetadata = {
  name: "WhatHappenedB",
  route: "/FlowB/WhatHappenedB",
  title: "What happened",
  shouldDisplay: () => {
    return true;
  },
  reviewSection: WhatHappenedBReview,
} as ScreenMetadata;
