"use client";

import {
  Radio,
  Fieldset,
  ErrorMessage,
  FormGroup,
} from "@trussworks/react-uswds";
import { PRODUCT_TYPE, useUserDataContext } from "@/_contexts/UserDataProvider";
import { useState } from "react";
import NavigateBack from "@/_components/NavigateBack";
import NavigateNext from "@/_components/NavigateNext";
import { ProductTypeMetadata } from "./metadata";

export default function ProductType() {
  const screenName = ProductTypeMetadata.name;
  const { userData, updateUserData } = useUserDataContext();
  const [validated, setValidated] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateUserData(PRODUCT_TYPE, event.target.value);
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
    return userData[PRODUCT_TYPE] && userData[PRODUCT_TYPE].length > 0;
  };

  return (
    <>
      <NavigateBack userData={userData} screenName={screenName} />
      <p>
        What was the product?
        <abbr
          title="required"
          className="usa-hint usa-hint--required text-no-underline"
        >
          *
        </abbr>
      </p>
      <FormGroup error={validated && !isValid()}>
        {validated && !isValid() && (
          <ErrorMessage id="product-type-error">
            Please select one of the following options.
          </ErrorMessage>
        )}
        <Fieldset
          legend="What was the product?"
          legendStyle="srOnly"
          className="margin-bottom-3"
          validationStatus={validated && !isValid() ? "error" : ""}
        >
          <Radio
            id="product-type-cosmetic"
            value="cosmeticProductType"
            name="ProductType"
            label="Cosmetic"
            checked={userData[PRODUCT_TYPE] === "cosmeticProductType"}
            onChange={handleChange}
          />
          <Radio
            id="product-type-drug"
            value="drugProductType"
            name="ProductType"
            label="Drug"
            checked={userData[PRODUCT_TYPE] === "drugProductType"}
            onChange={handleChange}
          />
          <Radio
            id="product-type-supplement"
            value="supplementProductType"
            name="ProductType"
            label="Dietary Supplement"
            checked={userData[PRODUCT_TYPE] === "supplementProductType"}
            onChange={handleChange}
          />
          <Radio
            id="product-type-food"
            value="foodProductType"
            name="ProductType"
            label="Food"
            checked={userData[PRODUCT_TYPE] === "foodProductType"}
            onChange={handleChange}
          />
          <Radio
            id="product-type-device"
            value="deviceProductType"
            name="ProductType"
            label="Medical Device"
            checked={userData[PRODUCT_TYPE] === "deviceProductType"}
            onChange={handleChange}
          />
          <Radio
            id="product-type-tobacco"
            value="tobaccoProductType"
            name="ProductType"
            label="Tobacco"
            checked={userData[PRODUCT_TYPE] === "tobaccoProductType"}
            onChange={handleChange}
          />
          <Radio
            id="product-type-vaccine"
            value="vaccineProductType"
            name="ProductType"
            label="Vaccine"
            checked={userData[PRODUCT_TYPE] === "vaccineProductType"}
            onChange={handleChange}
          />
          <Radio
            id="product-type-veterinary"
            value="veterinaryProductType"
            name="ProductType"
            label="Veterinary (animal food, drug, or device)"
            checked={userData[PRODUCT_TYPE] === "veterinaryProductType"}
            onChange={handleChange}
          />
          <Radio
            id="product-type-other"
            value="otherProductType"
            name="ProductType"
            label="Other / Don't know"
            checked={userData[PRODUCT_TYPE] === "otherProductType"}
            onChange={handleChange}
          />
        </Fieldset>
      </FormGroup>
      <NavigateNext
        userData={userData}
        screenName={screenName}
        validate={validate}
      />
    </>
  );
}
