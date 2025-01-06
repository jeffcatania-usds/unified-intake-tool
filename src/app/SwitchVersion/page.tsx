"use client";

import { Radio, Fieldset } from "@trussworks/react-uswds";
import Cookies from "js-cookie";
import { useState } from "react";

export default function SwitchExperience() {
  const CURRENT_FLOW = "CurrentFlow";

  const [currentFlow, setCurrentFlow] = useState(Cookies.get(CURRENT_FLOW));

  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    Cookies.set(CURRENT_FLOW, event.target.value);
    setCurrentFlow(event.target.value);
  };

  return (
    <>
      <Fieldset>
        <Radio
          id="FlowA"
          value="A"
          name="flow-radio"
          label="Flow A"
          checked={currentFlow !== "B"}
          onClick={handleClick}
        />
        <Radio
          id="FlowB"
          value="B"
          name="flow-radio"
          label="Flow B"
          checked={currentFlow === "B"}
          onClick={handleClick}
        />
      </Fieldset>
    </>
  );
}
