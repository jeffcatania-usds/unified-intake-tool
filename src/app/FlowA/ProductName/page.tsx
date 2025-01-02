'use client'

import NextLink from 'next/link';
import { TextInput, Fieldset, Link, FormGroup, ErrorMessage } from "@trussworks/react-uswds";
import { PRODUCT_NAME, useUserDataContext } from '@/_contexts/UserDataProvider';
import { previousScreen, nextScreen } from '@/_utils/Navigation';
import React, { useState } from 'react';

export default function ProductName() {
  const { userData, updateUserData } = useUserDataContext();
  const [ validated, setValidated ] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateUserData(PRODUCT_NAME, event.target.value);
  }

  const validate = (event: React.ChangeEvent) => {
    if (!isValid()) {
      event.preventDefault();
      setValidated(true);
      return false;
    }
    return true;
  }

  const isValid = () => {
    return userData[PRODUCT_NAME] && userData[PRODUCT_NAME].length > 0;
  }

  return (
    <>
        <div  className='margin-bottom-2 margin-top-2'>
            <NextLink href={previousScreen("ProductName", userData)} passHref legacyBehavior><Link variant="nav">&lt; Back</Link></NextLink>
        </div>
        <p>Product name<abbr title="required" className="usa-hint usa-hint--required text-no-underline">*</abbr><br />
          <span className="usa-hint">Include as much detail as possible, including the brand.</span>
        </p>
        <FormGroup error={validated && !isValid()}>
          { validated && !isValid() && 
            <ErrorMessage id="product-type-error">
              Please provide the product name.
            </ErrorMessage>
          }
          <Fieldset legend="Product name" legendStyle="srOnly" className="margin-bottom-3">
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
        <div style={{width: '100%', textAlign: 'center'}}>
            <NextLink href={nextScreen("ProductName", userData)} passHref legacyBehavior><Link onClick={validate} className="usa-button padding-left-6 padding-right-6" variant="unstyled" allowSpacebarActivation>Save and continue</Link></NextLink>
        </div>
    </>
  );
}
