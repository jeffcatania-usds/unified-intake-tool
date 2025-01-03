import { UserData } from "@/_contexts/UserDataProvider";

export interface ScreenMetadata {
  name: string;
  route: string;
  title: string;
  shouldDisplay: (userData: UserData) => boolean;
}
