"use client";

import NextLink from "next/link";
import {
  FormGroup,
  Link,
  Label,
  CharacterCount,
  ErrorMessage,
} from "@trussworks/react-uswds";
import {
  WHAT_HAPPENED,
  useUserDataContext,
} from "@/_contexts/UserDataProvider";
import { previousScreen, nextScreen } from "@/_utils/Navigation";
import React, { useState } from "react";

export default function WhatHappened() {
  const { userData, updateUserData } = useUserDataContext();
  const [validated, setValidated] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateUserData(WHAT_HAPPENED, event.target.value);
  };

  const validate = (event: React.ChangeEvent) => {
    if (!isValid()) {
      event.preventDefault();
      setValidated(true);
      return false;
    }
    return true;
  };

  const isValid = () => {
    return userData[WHAT_HAPPENED] && userData[WHAT_HAPPENED].length > 0;
  };

  return (
    <>
      <div className="margin-bottom-2 margin-top-2">
        <NextLink
          href={previousScreen("WhatHappened", userData)}
          passHref
          legacyBehavior
        >
          <Link variant="nav">&lt; Back</Link>
        </NextLink>
      </div>
      <FormGroup className="margin-bottom-3" error={validated && !isValid()}>
        <Label htmlFor="whatHappened">
          Describe what happened in detail
          <abbr
            title="required"
            className="usa-hint usa-hint--required text-no-underline"
          >
            *
          </abbr>
          <br />
          <span className="usa-hint">What happened, step by step?</span>
        </Label>
        <p className="usa-hint" id="whatHappenedHint">
          When first using the product, how long did it take before problems
          started, and did issues go away after stopping the product?
          <br />
          <br />
          If the person harmed went to the hospital, what was the diagnosis and
          how was it treated?
        </p>
        {validated && !isValid() && (
          <ErrorMessage id="product-type-error">
            Please describe what happened.
          </ErrorMessage>
        )}
        <CharacterCount
          id="whatHappened"
          name="whatHappened"
          isTextArea={true}
          aria-describedby="whatHappened-info whatHappenedHint"
          value={userData[WHAT_HAPPENED]}
          onChange={handleChange}
          maxLength={4000}
          required
        />
      </FormGroup>
      <div style={{ width: "100%", textAlign: "center" }}>
        <NextLink
          href={nextScreen("WhatHappened", userData)}
          passHref
          legacyBehavior
        >
          <Link
            onClick={validate}
            className="usa-button padding-left-6 padding-right-6"
            variant="unstyled"
            allowSpacebarActivation
          >
            Save and continue
          </Link>
        </NextLink>
      </div>
    </>
  );
}
