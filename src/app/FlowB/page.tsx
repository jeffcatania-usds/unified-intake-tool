"use client";

import OverviewProcessList from "@/components/OverviewProcessList";
import { FlowBMetadata } from "./metadata";
import Cookies from "js-cookie";
import { useNavigationContext } from "@/_contexts/NavigationProvider";
import { useEffect } from "react";

export default function FlowB() {
  const screenName = FlowBMetadata.name;
  const { setCurrentScreen } = useNavigationContext();

  Cookies.set("CurrentFlow", "B");

  useEffect(() => {
    setCurrentScreen(screenName, () => true, true, false, "Next");
  });

  return (
    <>
      <h1 className="font-ui-xl text-bold">Report a problem</h1>
      <p>Please tell us about</p>
      <OverviewProcessList />
    </>
  );
}
