'use client'

import NextLink from 'next/link';
import { Radio, Fieldset, Link } from "@trussworks/react-uswds";
import { PRODUCT_TYPE, useFormDataContext } from '@/_components/FormDataProvider';

export default function Home() {
  const { formData, updateFormData } = useFormDataContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Old value: " + formData[PRODUCT_TYPE]);
    console.log("New value: " + event.target.value);
    updateFormData(PRODUCT_TYPE, event.target.value);
    console.log("Updated value: " + formData[PRODUCT_TYPE]);
  }
  return (
    <>
        <div  className='margin-bottom-2'>
            <NextLink href="/FlowA" passHref legacyBehavior><Link variant="nav">&lt; Back</Link></NextLink>
        </div>
        <p>What was the product?<abbr title="required" className="usa-hint usa-hint--required text-no-underline">*</abbr></p>
        <Fieldset legend="What was the product?" legendStyle="srOnly" className="margin-bottom-3">
            <Radio 
              id="cosmeticProductType" 
              name="ProductType" 
              label="Cosmetic" 
              checked={formData[PRODUCT_TYPE] === 'cosmeticProductType'}
              onChange={handleChange} 
            />
            <Radio 
              id="drugProductType" 
              name="ProductType" 
              label="Drug" 
              checked={formData[PRODUCT_TYPE] === 'drugProductType'}
              onChange={handleChange} 
            />
            <Radio 
              id="supplementProductType" 
              name="ProductType" 
              label="Dietary Supplement" 
              checked={formData[PRODUCT_TYPE] === 'supplementProductType'}
              onChange={handleChange} 
            />
            <Radio 
              id="foodProductType" 
              name="ProductType" 
              label="Food" 
              checked={formData[PRODUCT_TYPE] === 'foodProductType'}
              onChange={handleChange} 
            />
            <Radio 
              id="deviceProductType" 
              name="ProductType" 
              label="Medical Device" 
              checked={formData[PRODUCT_TYPE] === 'deviceProductType'}
              onChange={handleChange} 
            />
            <Radio 
              id="tobaccoProductType" 
              name="ProductType" 
              label="Tobacco" 
              checked={formData[PRODUCT_TYPE] === 'tobaccoProductType'}
              onChange={handleChange} 
            />
            <Radio 
              id="vaccineProductType" 
              name="ProductType" 
              label="Vaccine" 
              checked={formData[PRODUCT_TYPE] === 'vaccineProductType'}
              onChange={handleChange} 
            />
            <Radio 
              id="veterinaryProductType" 
              name="ProductType" 
              label="Veterinary (animal food, drug, or device)" 
              checked={formData[PRODUCT_TYPE] === 'veterinaryProductType'}
              onChange={handleChange} 
            />
            <Radio 
              id="otherProductType"
              name="ProductType" 
              label="Other / Don't know" 
              checked={formData[PRODUCT_TYPE] === 'otherProductType'}
              onChange={handleChange} 
            />
        </Fieldset>
        <div style={{width: '100%', textAlign: 'center'}}>
            <NextLink href="/FlowA/ProductType" passHref legacyBehavior><Link className="usa-button padding-left-6 padding-right-6" variant="unstyled" allowSpacebarActivation>Save and continue</Link></NextLink>
        </div>
    </>
  );
}
