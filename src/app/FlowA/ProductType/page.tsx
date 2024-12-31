'use client'

import NextLink from 'next/link';
import { Radio, Fieldset, Link } from "@trussworks/react-uswds";
import { PRODUCT_TYPE, useUserDataContext } from '@/_contexts/UserDataProvider';
import { previousScreen, nextScreen } from '@/_utils/Navigation';

export default function ProductType() {
  const { userData, updateUserData } = useUserDataContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateUserData(PRODUCT_TYPE, event.target.value);
  }
  return (
    <>
        <div  className='margin-bottom-2 margin-top-2'>
            <NextLink href={previousScreen("ProductType", userData)} passHref legacyBehavior><Link variant="nav">&lt; Back</Link></NextLink>
        </div>
        <p>What was the product?<abbr title="required" className="usa-hint usa-hint--required text-no-underline">*</abbr></p>
        <Fieldset legend="What was the product?" legendStyle="srOnly" className="margin-bottom-3">
            <Radio 
              id="cosmeticProductType" 
              value="cosmeticProductType" 
              name="ProductType" 
              label="Cosmetic" 
              checked={userData[PRODUCT_TYPE] === 'cosmeticProductType'}
              onChange={handleChange} 
            />
            <Radio 
              id="drugProductType" 
              value="drugProductType" 
              name="ProductType" 
              label="Drug" 
              checked={userData[PRODUCT_TYPE] === 'drugProductType'}
              onChange={handleChange} 
            />
            <Radio 
              id="supplementProductType" 
              value="supplementProductType" 
              name="ProductType" 
              label="Dietary Supplement" 
              checked={userData[PRODUCT_TYPE] === 'supplementProductType'}
              onChange={handleChange} 
            />
            <Radio 
              id="foodProductType" 
              value="foodProductType" 
              name="ProductType" 
              label="Food" 
              checked={userData[PRODUCT_TYPE] === 'foodProductType'}
              onChange={handleChange} 
            />
            <Radio 
              id="deviceProductType" 
              value="deviceProductType" 
              name="ProductType" 
              label="Medical Device" 
              checked={userData[PRODUCT_TYPE] === 'deviceProductType'}
              onChange={handleChange} 
            />
            <Radio 
              id="tobaccoProductType" 
              value="tobaccoProductType" 
              name="ProductType" 
              label="Tobacco" 
              checked={userData[PRODUCT_TYPE] === 'tobaccoProductType'}
              onChange={handleChange} 
            />
            <Radio 
              id="vaccineProductType" 
              value="vaccineProductType" 
              name="ProductType" 
              label="Vaccine" 
              checked={userData[PRODUCT_TYPE] === 'vaccineProductType'}
              onChange={handleChange} 
            />
            <Radio 
              id="veterinaryProductType" 
              value="veterinaryProductType" 
              name="ProductType" 
              label="Veterinary (animal food, drug, or device)" 
              checked={userData[PRODUCT_TYPE] === 'veterinaryProductType'}
              onChange={handleChange} 
            />
            <Radio 
              id="otherProductType"
              value="otherProductType"
              name="ProductType" 
              label="Other / Don't know" 
              checked={userData[PRODUCT_TYPE] === 'otherProductType'}
              onChange={handleChange} 
            />
        </Fieldset>
        <div style={{width: '100%', textAlign: 'center'}}>
            <NextLink href={nextScreen("ProductType", userData)} passHref legacyBehavior><Link className="usa-button padding-left-6 padding-right-6" variant="unstyled" allowSpacebarActivation>Save and continue</Link></NextLink>
        </div>
    </>
  );
}
