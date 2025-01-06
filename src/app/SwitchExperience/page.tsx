"use client";

import { Radio, Fieldset } from "@trussworks/react-uswds";
import Cookies from "js-cookie";

export default function SwitchExperience() {
  const CURRENT_FLOW = "CurrentFlow";

  const getCurrentFlow = () => {
    return Cookies.get(CURRENT_FLOW);
  };

  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    Cookies.set(CURRENT_FLOW, event.target.value);
  };

  return (
    <>
      <Fieldset>
        <Radio
          id="FlowA"
          value="A"
          name="flow-radio"
          label="Flow A"
          checked={getCurrentFlow() !== "B"}
          onClick={handleClick}
        />
        <Radio
          id="FlowB"
          value="B"
          name="flow-radio"
          label="Flow B"
          checked={getCurrentFlow() === "B"}
          onClick={handleClick}
        />
      </Fieldset>
    </>
  );
}
