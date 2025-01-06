"use client";

import {
  Checkbox,
  Radio,
  Fieldset,
  ErrorMessage,
  FormGroup,
  StepIndicator,
  StepIndicatorStep,
} from "@trussworks/react-uswds";
import {
  SUBMISSION_TYPE,
  PRODUCT_TYPE,
  useUserDataContext,
} from "@/_contexts/UserDataProvider";
import { useState } from "react";
import NavigateBackB from "@/_components/NavigateBackB";
import NavigateNext from "@/_components/NavigateNext";
import { ProductMetadata } from "./metadata";

export default function Product() {
  const screenName = ProductMetadata.name;
  const { userData, updateUserData } = useUserDataContext();
  const [validated, setValidated] = useState(false);

  const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateUserData(PRODUCT_TYPE, event.target.value);
  };

  const handleReportTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (typeof userData[SUBMISSION_TYPE] === "object") {
      const previous = userData[SUBMISSION_TYPE];
      const indexOfValue = previous.indexOf(event.target.value);
      if (indexOfValue >= 0) {
        previous.splice(indexOfValue, 1);
        updateUserData(SUBMISSION_TYPE, previous);
      } else {
        updateUserData(SUBMISSION_TYPE, [...previous, event.target.value]);
      }
    } else {
      updateUserData(SUBMISSION_TYPE, [event.target.value]);
    }
  };

  const validate = (event: React.ChangeEvent) => {
    if (!isValidType() || !isValidReportType()) {
      event.preventDefault();
      setValidated(true);
      return false;
    }
    return true;
  };

  const isValidType = () => {
    return userData[PRODUCT_TYPE] && userData[PRODUCT_TYPE].length > 0;
  };

  const isValidReportType = () => {
    return userData[SUBMISSION_TYPE] && userData[SUBMISSION_TYPE].length > 0;
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
        <StepIndicatorStep label="The product" status="current" />
        <StepIndicatorStep label="What happened" />
        <StepIndicatorStep label="Who was harmed (optional)" />
        <StepIndicatorStep label="How to reach you (optional)" />
      </StepIndicator>
      <div className="margin-bottom-neg-2">
        What was the product?
        <abbr
          title="required"
          className="usa-hint usa-hint--required text-no-underline"
        >
          *
        </abbr>
      </div>
      <FormGroup error={validated && !isValidType()}>
        {validated && !isValidType() && (
          <ErrorMessage id="product-type-error">
            Please select one of the following options.
          </ErrorMessage>
        )}
        <Fieldset
          legend="What was the product?"
          legendStyle="srOnly"
          className="margin-bottom-3"
          validationStatus={validated && !isValidType() ? "error" : ""}
        >
          <Radio
            id="product-type-cosmetic"
            value="cosmeticProductType"
            name="ProductType"
            label="Cosmetic"
            checked={userData[PRODUCT_TYPE] === "cosmeticProductType"}
            onChange={handleTypeChange}
          />
          <Radio
            id="product-type-drug"
            value="drugProductType"
            name="ProductType"
            label="Drug"
            checked={userData[PRODUCT_TYPE] === "drugProductType"}
            onChange={handleTypeChange}
          />
          <Radio
            id="product-type-supplement"
            value="supplementProductType"
            name="ProductType"
            label="Dietary Supplement"
            checked={userData[PRODUCT_TYPE] === "supplementProductType"}
            onChange={handleTypeChange}
          />
          <Radio
            id="product-type-food"
            value="foodProductType"
            name="ProductType"
            label="Food"
            checked={userData[PRODUCT_TYPE] === "foodProductType"}
            onChange={handleTypeChange}
          />
          <Radio
            id="product-type-device"
            value="deviceProductType"
            name="ProductType"
            label="Medical Device"
            checked={userData[PRODUCT_TYPE] === "deviceProductType"}
            onChange={handleTypeChange}
          />
          <Radio
            id="product-type-tobacco"
            value="tobaccoProductType"
            name="ProductType"
            label="Tobacco"
            checked={userData[PRODUCT_TYPE] === "tobaccoProductType"}
            onChange={handleTypeChange}
          />
          <Radio
            id="product-type-vaccine"
            value="vaccineProductType"
            name="ProductType"
            label="Vaccine"
            checked={userData[PRODUCT_TYPE] === "vaccineProductType"}
            onChange={handleTypeChange}
          />
          <Radio
            id="product-type-veterinary"
            value="veterinaryProductType"
            name="ProductType"
            label="Veterinary (animal food, drug, or device)"
            checked={userData[PRODUCT_TYPE] === "veterinaryProductType"}
            onChange={handleTypeChange}
          />
          <Radio
            id="product-type-other"
            value="otherProductType"
            name="ProductType"
            label="Other / Don't know"
            checked={userData[PRODUCT_TYPE] === "otherProductType"}
            onChange={handleTypeChange}
          />
        </Fieldset>
      </FormGroup>
      <div>
        What happened?
        <abbr
          title="required"
          className="usa-hint usa-hint--required text-no-underline"
        >
          *
        </abbr>
        <br />
        <span className="usa-hint">Select all that apply</span>
      </div>
      <FormGroup error={validated && !isValidReportType()}>
        {validated && !isValidReportType() && (
          <ErrorMessage id="report-type-error">
            Please select one or more of the following options.
          </ErrorMessage>
        )}
        <Fieldset
          legend="Tell us what happened"
          legendStyle="srOnly"
          className="margin-bottom-3"
        >
          <Checkbox
            id="someoneWasHarmedSubmissionType"
            value="someoneWasHarmedSubmissionType"
            name="SubmissionType"
            label="Someone was harmed"
            checked={userData[SUBMISSION_TYPE]?.includes(
              "someoneWasHarmedSubmissionType",
            )}
            onChange={handleReportTypeChange}
            tile
          />
          <Checkbox
            id="someoneUsedAProductIncorrectlySubmissionType"
            value="someoneUsedAProductIncorrectlySubmissionType"
            name="SubmissionType"
            label="Someone used a product incorrectly"
            checked={userData[SUBMISSION_TYPE]?.includes(
              "someoneUsedAProductIncorrectlySubmissionType",
            )}
            onChange={handleReportTypeChange}
            tile
          />
          <Checkbox
            id="somethingWasWrongWithAProductSubmissionType"
            value="somethingWasWrongWithAProductSubmissionType"
            name="SubmissionType"
            label="Something was wrong with a product"
            checked={userData[SUBMISSION_TYPE]?.includes(
              "somethingWasWrongWithAProductSubmissionType",
            )}
            onChange={handleReportTypeChange}
            tile
          />
          <Checkbox
            id="illegalActivityOrFraudSubmissionType"
            value="illegalActivityOrFraudSubmissionType"
            name="SubmissionType"
            label="Illegal activity or fraud"
            checked={userData[SUBMISSION_TYPE]?.includes(
              "illegalActivityOrFraudSubmissionType",
            )}
            onChange={handleReportTypeChange}
            tile
          />
        </Fieldset>
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
