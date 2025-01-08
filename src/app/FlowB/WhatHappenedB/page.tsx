"use client";

import {
  FileInput,
  ErrorMessage,
  FormGroup,
  StepIndicator,
  StepIndicatorStep,
  DateInputGroup,
  DateInput,
  Label,
  Select,
  TextInput,
  TextInputMask,
  CharacterCount,
} from "@trussworks/react-uswds";
import {
  PRODUCT_PHOTOS,
  PRODUCT_NAME,
  NDC_NUMBER,
  WHAT_HAPPENED,
  EVENT_DATE,
  ADDITIONAL_FILES,
  PRODUCT_TYPE,
  useUserDataContext,
} from "@/_contexts/UserDataProvider";
import { useState } from "react";
import NavigateBackB from "@/_components/NavigateBackB";
import NavigateNext from "@/_components/NavigateNext";
import { WhatHappenedBMetadata } from "./metadata";
import { z } from "zod";

export default function WhatHappenedB() {
  const screenName = WhatHappenedBMetadata.name;
  const { userData, updateUserData } = useUserDataContext();
  const [validated, setValidated] = useState(false);

  const handleProductPhotoChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    updateUserData(PRODUCT_PHOTOS, event.target.value);
  };

  const handleProductNameChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    updateUserData(PRODUCT_NAME, event.target.value);
  };

  const handleNDCChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateUserData(NDC_NUMBER, event.target.value.replaceAll("-", ""));
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    updateUserData(WHAT_HAPPENED, event.target.value);
  };

  const handleAdditionalFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    updateUserData(ADDITIONAL_FILES, event.target.value);
  };

  const validate = (event: React.ChangeEvent) => {
    if (
      !isProductNameValid() ||
      !isNDCValid() ||
      !isDescriptionValid() ||
      !isDateValid()
    ) {
      event.preventDefault();
      setValidated(true);
      return false;
    }
    return true;
  };

  const isProductNameValid = () => {
    return userData[PRODUCT_NAME] && userData[PRODUCT_NAME].length > 0;
  };

  // Testing for a string consisting only of digits because the number may contain leading 0's
  const ndcSchema = z
    .string()
    .min(10)
    .max(11)
    .refine((value) => /^[0-9]*$/.test(value ?? ""));

  const isNDCValid = () => {
    return (
      !userData[NDC_NUMBER] || ndcSchema.safeParse(userData[NDC_NUMBER]).success
    );
  };

  const isDescriptionValid = () => {
    return userData[WHAT_HAPPENED] && userData[WHAT_HAPPENED].length > 0;
  };

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
    if (month && day && year) {
      try {
        result = new Date(month + "/" + day + "/" + year).toDateString();
      } catch {
        result = "";
      }
    } else {
      // If the date is incomplete, default to a less specific value.
      if (month) {
        result = month + "/";
      }
      result += year;
    }
    return result;
  };

  // Require at minimum a 2-digit year.
  const yearSchema = z.number().min(10);
  const dateSchema = z.coerce.date();

  const isDateValid = () => {
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
      <StepIndicator
        headingLevel="h1"
        ofText="of"
        stepText="Step"
        className="font-ui-lg text-bold margin-top-3"
        showLabels={false}
      >
        <StepIndicatorStep label="The product" status="complete" />
        <StepIndicatorStep label="What happened" status="current" />
        <StepIndicatorStep label="Who was harmed (optional)" />
        <StepIndicatorStep label="How to reach you (optional)" />
      </StepIndicator>
      <FormGroup>
        <Label htmlFor="productPhotosFileInput">
          Upload product photos (optional)
          <div id="product-photos-hint" className="usa-hint">
            Include a photo of anywhere there is text on the package, product,
            and instructions.
            <br />
            <br />
            Include photos of anything wrong with the product.
          </div>
        </Label>
        <FileInput
          id="productPhotosFileInput"
          name="productPhotosFileInput"
          accept="image/*"
          aria-describedby="product-photos-hint"
          onChange={handleProductPhotoChange}
          multiple
        />
      </FormGroup>
      <FormGroup error={validated && !isProductNameValid()}>
        <Label htmlFor="productName">
          Product name
          <abbr
            title="required"
            className="usa-hint usa-hint--required text-no-underline"
          >
            *
          </abbr>
          <br />
          <span className="usa-hint">
            Include as much detail as possible, including the brand.
          </span>
        </Label>
        {validated && !isProductNameValid() && (
          <ErrorMessage id="product-type-error">
            Please provide the product name.
          </ErrorMessage>
        )}
        <TextInput
          id="productName"
          name="productName"
          type="text"
          value={userData[PRODUCT_NAME]}
          onChange={handleProductNameChange}
          required
        />
      </FormGroup>
      {userData[PRODUCT_TYPE] === "Drug" && (
        <FormGroup
          className="margin-bottom-3"
          error={validated && !isNDCValid()}
        >
          <Label title="National Drug Code" htmlFor="ndcNumber">
            NDC number (optional)
            <br />
            <span className="usa-hint">
              The code is 10 or 11 numbers, such as 12345-6789-01.
            </span>
          </Label>
          {validated && !isNDCValid() && (
            <ErrorMessage id="ndc-error">
              Please provide a 10 or 11 digit NDC number.
            </ErrorMessage>
          )}
          <TextInputMask
            id="ndcNumber"
            name="ndcNumber"
            type="text"
            mask="_____-____-__"
            pattern="^\d{4,5}-\d{4}-\d{2}$"
            value={userData[NDC_NUMBER]}
            onChange={handleNDCChange}
          />
        </FormGroup>
      )}
      <FormGroup
        className="margin-bottom-3"
        error={validated && !isDescriptionValid()}
      >
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
          <div className="usa-hint" id="whatHappenedHint">
            When first using the product, how long did it take before problems
            started, and did issues go away after stopping the product?
            <br />
            <br />
            If the person harmed went to the hospital, what was the diagnosis
            and how was it treated?
          </div>
        </Label>
        {validated && !isDescriptionValid() && (
          <ErrorMessage id="description-error">
            Please describe what happened.
          </ErrorMessage>
        )}
        <CharacterCount
          id="whatHappened"
          name="whatHappened"
          isTextArea={true}
          aria-describedby="whatHappened-info whatHappenedHint"
          value={userData[WHAT_HAPPENED]}
          onChange={handleDescriptionChange}
          maxLength={4000}
          required
        />
      </FormGroup>
      <FormGroup error={validated && !isDateValid()}>
        <Label htmlFor="eventDateMonth" className="margin-bottom-neg-2">
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
        {validated && !isDateValid() && (
          <ErrorMessage id="event-date-error" className="margin-top-1">
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
            label="Year*"
            unit="year"
            maxLength={4}
            placeholder="YYYY"
            onChange={handleYearChange}
            required
          />
        </DateInputGroup>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="additionalFileInput">
          Upload any additional information (optional)
          <div id="additional-files-hint" className="usa-hint">
            This may include medical records.
          </div>
        </Label>
        <FileInput
          id="additionalFileInput"
          name="additionalFileInput"
          aria-describedby="additional-filesgit a-hint"
          onChange={handleAdditionalFileChange}
          multiple
        />
      </FormGroup>
      <NavigateNext
        userData={userData}
        screenName={screenName}
        validate={validate}
      />
      <NavigateBackB userData={userData} screenName={screenName} />
    </>
  );
}
