import { UserData } from "@/_contexts/UserDataProvider";
import React from "react";

export interface ScreenMetadata {
  name: string;
  route: string;
  title: string;
  reviewSection?: React.FC;
  shouldDisplay: (userData: UserData) => boolean;
}
