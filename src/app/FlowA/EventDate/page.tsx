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
import { z } from "zod";

export default function EventDate() {
  const screenName = EventDateMetadata.name;
  const { userData, updateUserData } = useUserDataContext();
  const [validated, setValidated] = useState(false);
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");

  const handleMonthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMonth(event.target.value);
    updateUserData(EVENT_DATE, formatDate());
  };
  const handleDayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDay(event.target.value);
    updateUserData(EVENT_DATE, formatDate());
  };
  const handleYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYear(event.target.value);
    updateUserData(EVENT_DATE, formatDate());
  };

  const formatDate = () => {
    let result = "";
    try {
      result = new Date(month + "/" + day + "/" + year).toDateString();
    } catch {
      // If the date is invalid, default to a less specific value.
      result = month ? month + "/" : "";
      result += year;
    }
    return result;
  };

  const validate = (event: React.ChangeEvent) => {
    if (!isValid()) {
      event.preventDefault();
      setValidated(true);
      return false;
    }
    return true;
  };

  // Require at minimum a 2-digit year.
  const yearSchema = z.number().min(10);
  const dateSchema = z.coerce.date();

  const isValid = () => {
    // If a day is provided, ensure that the date is valid.
    if (day.length > 0) {
      return dateSchema.safeParse(formatDate());
    } else {
      // If a day is not provided, require a valid year.
      return yearSchema.safeParse(year).success;
    }
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
              value={month}
              className="width-card"
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
            value={day}
            onChange={handleDayChange}
          />
          <DateInput
            id="eventDateYear"
            name="eventDateYear"
            label="Year*"
            unit="year"
            maxLength={4}
            placeholder="YYYY"
            value={year}
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
