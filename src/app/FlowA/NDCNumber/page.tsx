"use client";

import NextLink from "next/link";
import {
  TextInput,
  FormGroup,
  Link,
  ErrorMessage,
} from "@trussworks/react-uswds";
import { NDC_NUMBER, useUserDataContext } from "@/_contexts/UserDataProvider";
import { previousScreen, nextScreen } from "@/_utils/Navigation";
import React, { useState } from "react";
import { z } from "zod";

export default function NDCNumber() {
  const { userData, updateUserData } = useUserDataContext();
  const [validated, setValidated] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateUserData(NDC_NUMBER, event.target.value);
  };

  const validate = (event: React.ChangeEvent) => {
    if (!isValid()) {
      event.preventDefault();
      setValidated(true);
      return false;
    }
    return true;
  };

  // Testing for a string consisting only of digits because the number may contain leading 0's
  const ndcSchema = z
    .string()
    .min(10)
    .max(11)
    .refine((value) => /^[0-9]*$/.test(value ?? ""));

  const isValid = () => {
    return (
      !userData[NDC_NUMBER] || ndcSchema.safeParse(userData[NDC_NUMBER]).success
    );
  };

  return (
    <>
      <div className="margin-bottom-2 margin-top-2">
        <NextLink
          href={previousScreen("NDCNumber", userData)}
          passHref
          legacyBehavior
        >
          <Link variant="nav">&lt; Back</Link>
        </NextLink>
      </div>
      <p title="National Drug Code">
        NDC number (optional)
        <br />
        <span className="usa-hint">
          The code is 10 or 11 numbers, such as 12345-6789-01.
          <br />
          Do not enter the dashes, for example 12345678901
        </span>
      </p>
      <FormGroup className="margin-bottom-3">
        {validated && !isValid() && (
          <ErrorMessage id="email-error">
            Please provide a 10 or 11 digit NDC number.
          </ErrorMessage>
        )}
        <TextInput
          id="ndcNumber"
          name="ndcNumber"
          type="text"
          value={userData[NDC_NUMBER]}
          onChange={handleChange}
        />
      </FormGroup>
      <div className="margin-bottom-2 margin-top-2">
        <NextLink
          href={nextScreen("NDCNumber", userData)}
          passHref
          legacyBehavior
        >
          <Link onClick={validate} variant="nav">
            Skip this step
          </Link>
        </NextLink>
      </div>
      <div style={{ width: "100%", textAlign: "center" }}>
        <NextLink
          href={nextScreen("NDCNumber", userData)}
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
