"use client";

import {
  TextInput,
  Fieldset,
  FormGroup,
  ErrorMessage,
} from "@trussworks/react-uswds";
import { PRODUCT_NAME, useUserDataContext } from "@/_contexts/UserDataProvider";
import { useState } from "react";
import NavigateBack from "@/_components/NavigateBack";
import NavigateNext from "@/_components/NavigateNext";
import { ProductNameMetadata } from "./metadata";

export default function ProductName() {
  const screenName = ProductNameMetadata.name;
  const { userData, updateUserData } = useUserDataContext();
  const [validated, setValidated] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateUserData(PRODUCT_NAME, event.target.value);
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
    return userData[PRODUCT_NAME] && userData[PRODUCT_NAME].length > 0;
  };

  return (
    <>
      <NavigateBack userData={userData} screenName={screenName} />
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
      <FormGroup error={validated && !isValid()}>
        {validated && !isValid() && (
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
            onChange={handleChange}
            required
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
