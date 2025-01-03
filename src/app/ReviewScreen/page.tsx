"use client";

import { useUserDataContext } from "@/_contexts/UserDataProvider";
import NavigateBack from "@/_components/NavigateBack";
import NavigateNext from "@/_components/NavigateNext";
import { ReviewScreenMetadata } from "./metadata";
import { screenOrder } from "@/_utils/Navigation";

export default function ReviewScreen() {
  const screenName = ReviewScreenMetadata.name;
  const { userData } = useUserDataContext();

  const displayedScreens = screenOrder.filter((screen) =>
    screen.shouldDisplay(userData),
  );

  return (
    <>
      <NavigateBack userData={userData} screenName={screenName} />
      <h1 className="font-ui-lg text-bold">Review your submission</h1>
      <p className="margin-bottom-2">
        Review your information below to make sure it is correct. After you
        submit, you will not be able to update this report.
      </p>
      <p>To make changes, tap on any section to edit.</p>
      {displayedScreens.map((item) => {
        if (item.reviewSection != undefined) {
          return <item.reviewSection key={item.name} />;
        } else {
          return <></>;
        }
      })}
      <NavigateNext
        userData={userData}
        screenName={screenName}
        buttonText="Submit"
      />
    </>
  );
}
