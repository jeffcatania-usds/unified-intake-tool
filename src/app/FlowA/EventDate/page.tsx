"use client";

import {
  DateInputGroup,
  FormGroup,
  Label,
  Select,
  DateInput,
  ErrorMessage,
} from "@trussworks/react-uswds";
import { EVENT_DATE, useUserDataContext } from "@/_contexts/UserDataProvider";
import { useState } from "react";
import NavigateBack from "@/_components/NavigateBack";
import NavigateNext from "@/_components/NavigateNext";
import { EventDateMetadata } from "./metadata";

export default function EventDate() {
  const screenName = EventDateMetadata.name;
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
      <NavigateBack userData={userData} screenName={screenName} />
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
      <NavigateNext
        userData={userData}
        screenName={screenName}
        validate={validate}
      />
    </>
  );
}
