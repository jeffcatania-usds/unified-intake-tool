"use client";

import {
  FileInput,
  Fieldset,
  ErrorMessage,
  FormGroup,
  StepIndicator,
  StepIndicatorStep,
  DateInputGroup,
  DateInput,
  Label,
  Select,
  TextInput,
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
    updateUserData(NDC_NUMBER, event.target.value);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    updateUserData(WHAT_HAPPENED, event.target.value);
  };

  const handleMonthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateUserData(EVENT_DATE, event.target.value);
  };
  const handleDayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateUserData(EVENT_DATE, event.target.value);
  };
  const handleYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateUserData(EVENT_DATE, event.target.value);
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

  const isDateValid = () => {
    return userData[EVENT_DATE];
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
      <p>Upload product photos (optional)</p>
      <div className="usa-hint margin-bottom-2" id="product-photos-hint">
        Include a photo of anywhere there is text on the package, product, and
        instructions.
        <br />
        <br />
        Include photos of anything wrong with the product.
      </div>
      <Fieldset
        legend="Upload product photos"
        legendStyle="srOnly"
        className="margin-bottom-3"
      >
        <FileInput
          id="productPhotosFileInput"
          name="productPhotosFileInput"
          accept="image/*"
          aria-describedby="product-photos-hint"
          onChange={handleProductPhotoChange}
          multiple
        />
      </Fieldset>
      <p>
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
      </p>
      <FormGroup error={validated && !isProductNameValid()}>
        {validated && !isProductNameValid() && (
          <ErrorMessage id="product-type-error">
            Please provide the product name.
          </ErrorMessage>
        )}
        <Fieldset
          legend="Product name"
          legendStyle="srOnly"
          className="margin-bottom-3"
        >
          <TextInput
            id="productName"
            name="productName"
            type="text"
            value={userData[PRODUCT_NAME]}
            onChange={handleProductNameChange}
            required
          />
        </Fieldset>
      </FormGroup>
      {userData[PRODUCT_TYPE] === "drugProductType" && (
        <>
          <p title="National Drug Code">
            NDC number (optional)
            <br />
            <span className="usa-hint">
              The code is 10 or 11 numbers, such as 12345-6789-01.
              <br />
              Do not enter the dashes, for example 12345678901
            </span>
          </p>
          <FormGroup
            className="margin-bottom-3"
            error={validated && !isNDCValid()}
          >
            {validated && !isNDCValid() && (
              <ErrorMessage id="ndc-error">
                Please provide a 10 or 11 digit NDC number.
              </ErrorMessage>
            )}
            <TextInput
              id="ndcNumber"
              name="ndcNumber"
              type="text"
              value={userData[NDC_NUMBER]}
              onChange={handleNDCChange}
            />
          </FormGroup>
        </>
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
        </Label>
        <br />
        <br />
        <p className="usa-hint" id="whatHappenedHint">
          When first using the product, how long did it take before problems
          started, and did issues go away after stopping the product?
          <br />
          <br />
          If the person harmed went to the hospital, what was the diagnosis and
          how was it treated?
        </p>
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
      <FormGroup error={validated && !isDateValid()}>
        {validated && !isDateValid() && (
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
      <p>Upload any additional information (optional)</p>
      <div className="usa-hint margin-bottom-2" id="additional-files-hint">
        This may include medical records.
      </div>
      <Fieldset
        legend="Upload any additional information"
        legendStyle="srOnly"
        className="margin-bottom-3"
      >
        <FileInput
          id="additionalFileInput"
          name="additionalFileInput"
          aria-describedby="additional-filesgit a-hint"
          onChange={handleAdditionalFileChange}
          multiple
        />
      </Fieldset>
      <NavigateNext
        userData={userData}
        screenName={screenName}
        validate={validate}
      />
      <NavigateBackB userData={userData} screenName={screenName} />
    </>
  );
}
