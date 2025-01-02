'use client'

import NextLink from 'next/link';
import { Radio, Fieldset, Link, ErrorMessage, FormGroup } from "@trussworks/react-uswds";
import { PRODUCT_TYPE, useUserDataContext } from '@/_contexts/UserDataProvider';
import { previousScreen, nextScreen } from '@/_utils/Navigation';
import { useState } from 'react';

export default function ProductType() {
  const { userData, updateUserData } = useUserDataContext();
  const [ validated, setValidated ] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateUserData(PRODUCT_TYPE, event.target.value);
  }

  const validate = () => {
    if (isValid()) {
      setValidated(true);
      return false;
    }
    return true;
  }

  const isValid = () => {
    return !userData[PRODUCT_TYPE] || userData[PRODUCT_TYPE].length == 0;
  }

  return (
    <>
        <div  className='margin-bottom-2 margin-top-2'>
            <NextLink href={previousScreen("ProductType", userData)} passHref legacyBehavior><Link variant="nav">&lt; Back</Link></NextLink>
        </div>
        <p>What was the product?<abbr title="required" className="usa-hint usa-hint--required text-no-underline">*</abbr></p>
        <FormGroup error={validated && !isValid()}>
          <ErrorMessage id="product-type-error">
            Please select one of the following options.
          </ErrorMessage>
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
                checked={userData[PRODUCT_TYPE] === 'cosmeticProductType'}
                onChange={handleChange} 
              />
              <Radio 
                id="product-type-drug" 
                value="drugProductType" 
                name="ProductType" 
                label="Drug" 
                checked={userData[PRODUCT_TYPE] === 'drugProductType'}
                onChange={handleChange} 
              />
              <Radio 
                id="product-type-supplement" 
                value="supplementProductType" 
                name="ProductType" 
                label="Dietary Supplement" 
                checked={userData[PRODUCT_TYPE] === 'supplementProductType'}
                onChange={handleChange} 
              />
              <Radio 
                id="product-type-food" 
                value="foodProductType" 
                name="ProductType" 
                label="Food" 
                checked={userData[PRODUCT_TYPE] === 'foodProductType'}
                onChange={handleChange} 
              />
              <Radio 
                id="product-type-device" 
                value="deviceProductType" 
                name="ProductType" 
                label="Medical Device" 
                checked={userData[PRODUCT_TYPE] === 'deviceProductType'}
                onChange={handleChange} 
              />
              <Radio 
                id="product-type-tobacco" 
                value="tobaccoProductType" 
                name="ProductType" 
                label="Tobacco" 
                checked={userData[PRODUCT_TYPE] === 'tobaccoProductType'}
                onChange={handleChange} 
              />
              <Radio 
                id="product-type-vaccine" 
                value="vaccineProductType" 
                name="ProductType" 
                label="Vaccine" 
                checked={userData[PRODUCT_TYPE] === 'vaccineProductType'}
                onChange={handleChange} 
              />
              <Radio 
                id="product-type-veterinary" 
                value="veterinaryProductType" 
                name="ProductType" 
                label="Veterinary (animal food, drug, or device)" 
                checked={userData[PRODUCT_TYPE] === 'veterinaryProductType'}
                onChange={handleChange} 
              />
              <Radio 
                id="product-type-other"
                value="otherProductType"
                name="ProductType" 
                label="Other / Don't know" 
                checked={userData[PRODUCT_TYPE] === 'otherProductType'}
                onChange={handleChange} 
              />
          </Fieldset>
        </FormGroup>
        <div style={{width: '100%', textAlign: 'center'}}>
            <NextLink href={nextScreen("ProductType", userData)} passHref legacyBehavior onClick={validate}><Link className="usa-button padding-left-6 padding-right-6" variant="unstyled" allowSpacebarActivation>Save and continue</Link></NextLink>
        </div>
    </>
  );
}
