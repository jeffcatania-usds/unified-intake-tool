"use client";

import { useUserDataContext } from "@/_contexts/UserDataProvider";
import { ReviewScreenMetadata } from "./metadata";
import { screenOrder } from "@/_utils/Navigation";
import { useNavigationContext } from "@/_contexts/NavigationProvider";

export default function ReviewScreen() {
  const screenName = ReviewScreenMetadata.name;
  const { userData } = useUserDataContext();
  const { setCurrentScreen } = useNavigationContext();

  const displayedScreens = screenOrder().filter((screen) =>
    screen.shouldDisplay(userData),
  );

  setCurrentScreen(screenName, () => true, true, true, "Submit");

  return (
    <>
      <h1 className="font-ui-lg text-bold">Review your submission</h1>
      <div className="margin-bottom-2">
        Review your information below to make sure it is correct. After you
        submit, you will not be able to update this report.
      </div>
      <div>To make changes, tap on any section to edit.</div>
      {displayedScreens.map((item) => {
        if (item.reviewSection != undefined) {
          return <item.reviewSection key={item.name} />;
        } else {
          return <></>;
        }
      })}
    </>
  );
}
