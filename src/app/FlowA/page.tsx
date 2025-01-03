"use client";

import OverviewProcessList from "@/components/OverviewProcessList";
import { useUserDataContext } from "@/_contexts/UserDataProvider";
import NavigateNext from "@/_components/NavigateNext";
import { FlowAMetadata } from "./metadata";

export default function FlowA() {
  const screenName = FlowAMetadata.name;
  const { userData } = useUserDataContext();

  return (
    <>
      <h1 className="font-ui-xl text-bold">Report a problem</h1>
      <p>Please tell us about</p>
      <OverviewProcessList />
      <NavigateNext
        userData={userData}
        screenName={screenName}
        buttonText="Next"
      />
    </>
  );
}
