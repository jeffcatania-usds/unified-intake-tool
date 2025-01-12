"use client";

import {
  DateInputGroup,
  FormGroup,
  Label,
  Select,
  DateInput,
  ErrorMessage,
} from "@trussworks/react-uswds";
import {
  EVENT_DATE,
  EVENT_DATE_PRECISION,
  useUserDataContext,
} from "@/_contexts/UserDataProvider";
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
  const currentYear = new Date().getFullYear().toString();

  // Pre-populate date from existing data if applicable.
  if (userData[EVENT_DATE] && typeof userData[EVENT_DATE] === "string") {
    const currentDate = new Date(userData[EVENT_DATE]);
    switch (userData[EVENT_DATE_PRECISION]) {
      case "day":
        setDay(currentDate.getDate().toString());
      case "month":
        setMonth((currentDate.getMonth() + 1).toString());
      case "year":
        setYear(currentDate.getFullYear().toString());
      default:
    }
  }

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
    if (month && day && year) {
      updateUserData(EVENT_DATE_PRECISION, "day");
      try {
        result = new Date(month + "/" + day + "/" + year).toDateString();
      } catch {
        result = "";
      }
    } else if (year) {
      const partialDate = new Date();

      // Prevents problems caused if the current day is 31,
      // and the target month doesn't have 31 days.
      partialDate.setDate(1);

      // If the date is incomplete, default to a less specific value.
      if (month) {
        updateUserData(EVENT_DATE_PRECISION, "month");
        // Month on the date object uses a 0-based index.
        partialDate.setMonth(parseInt(month) - 1);
      } else {
        updateUserData(EVENT_DATE_PRECISION, "year");
      }
      partialDate.setFullYear(parseInt(year));
      result = partialDate.toDateString();
    }
    return result;
  };

  const autoCompleteYear = () => {
    // Auto-complete 2-digit years into 4-digit years.
    if (year && year.length < 3) {
      if (parseInt(year) > parseInt(currentYear.slice(2))) {
        // 2-digit years greater than the current 2-digit year are in 1900.
        setYear("19" + year);
      } else {
        // 2-digit years less than the current 2-digit year are in 2000.
        setYear("20" + year);
      }
    }
  };

  const validate = (event: React.ChangeEvent) => {
    if (!isValid()) {
      event.preventDefault();
      setValidated(true);
      return false;
    }
    return true;
  };

  // The FDA cannot accept complaints occuring before the agency was founded.
  // Or complaints from the future.
  const yearSchema = z.coerce.number().min(1906).max(parseInt(currentYear));
  const dateSchema = z.coerce
    .date()
    .min(new Date("1906-06-30"))
    .max(new Date());

  const isValid = () => {
    // If a day is provided, ensure that the date is valid.
    if (day) {
      return month && year && dateSchema.safeParse(formatDate()).success;
    } else {
      // If a day is not provided, require a valid year.
      return yearSchema.safeParse(year).success;
    }
  };

  return (
    <>
      <NavigateBack userData={userData} screenName={screenName} />
      <FormGroup error={validated && !isValid()}>
        <Label>
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
        </Label>
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
              defaultValue={month}
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
            onBlur={autoCompleteYear}
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
