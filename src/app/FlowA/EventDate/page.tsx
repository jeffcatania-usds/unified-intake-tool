"use client";

import NextLink from "next/link";
import {
  DateInputGroup,
  FormGroup,
  Link,
  Label,
  Select,
  DateInput,
  ErrorMessage,
} from "@trussworks/react-uswds";
import { EVENT_DATE, useUserDataContext } from "@/_contexts/UserDataProvider";
import { previousScreen, nextScreen } from "@/_utils/Navigation";
import React, { useState } from "react";

export default function EventDate() {
  const { userData, updateUserData } = useUserDataContext();
  const [validated, setValidated] = useState(false);

  const handleMonthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateUserData(EVENT_DATE, event.target.value);
  };
  const handleDayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateUserData(EVENT_DATE, event.target.value);
  };
  const handleYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateUserData(EVENT_DATE, event.target.value);
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
    return userData[EVENT_DATE];
  };
  return (
    <>
      <div className="margin-bottom-2 margin-top-2">
        <NextLink
          href={previousScreen("EventDate", userData)}
          passHref
          legacyBehavior
        >
          <Link variant="nav">&lt; Back</Link>
        </NextLink>
      </div>
      <p>
        When did this happen?
        <abbr
          title="required"
          className="usa-hint usa-hint--required text-no-underline"
        >
          *
        </abbr>
        <br />
        <span className="usa-hint">
          For example: October 1, 2024
          <br />
          If you don&apos;t know, give an approximate date.
        </span>
      </p>
      <FormGroup error={validated && !isValid()}>
        {validated && !isValid() && (
          <ErrorMessage id="event-date-error">
            Please provide the date this happened.
          </ErrorMessage>
        )}
        <DateInputGroup
          legend="When did this happen?"
          legendStyle="srOnly"
          className="margin-bottom-3"
        >
          <FormGroup className="usa-form-group--month usa-form-group--select">
            <Label htmlFor="eventDateMonth">Month</Label>
            <Select
              id="eventDateMonth"
              name="eventDateMonth"
              onChange={handleMonthChange}
            >
              <option>- Select -</option>
              <option value="1">01 - January</option>
              <option value="2">02 - February</option>
              <option value="3">03 - March</option>
              <option value="4">04 - April</option>
              <option value="5">05 - May</option>
              <option value="6">06 - June</option>
              <option value="7">07 - July</option>
              <option value="8">08 - August</option>
              <option value="9">09 - September</option>
              <option value="10">10 - October</option>
              <option value="11">11 - November</option>
              <option value="12">12 - December</option>
            </Select>
          </FormGroup>
          <DateInput
            id="eventDateDay"
            name="eventDateDay"
            label="Day"
            unit="day"
            maxLength={2}
            placeholder="DD"
            onChange={handleDayChange}
          />
          <DateInput
            id="eventDateYear"
            name="eventDateYear"
            label="Year"
            unit="year"
            maxLength={4}
            placeholder="YYYY"
            onChange={handleYearChange}
            required
          />
        </DateInputGroup>
      </FormGroup>
      <div style={{ width: "100%", textAlign: "center" }}>
        <NextLink
          href={nextScreen("EventDate", userData)}
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
