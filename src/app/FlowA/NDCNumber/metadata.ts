"use client";

import { ScreenMetadata } from "@/_utils/ScreenMetadata";
import { UserData, PRODUCT_TYPE } from "@/_contexts/UserDataProvider";
import NDCNumberReview from "./review";

export const NDCNumberMetadata = {
  name: "NDCNumber",
  route: "/FlowA/NDCNumber",
  title: "NDC number",
  shouldDisplay: (userData: UserData) => {
    return userData[PRODUCT_TYPE] === "Drug";
  },
  reviewSection: NDCNumberReview,
} as ScreenMetadata;
