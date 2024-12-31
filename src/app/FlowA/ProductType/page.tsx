'use client'

import NextLink from 'next/link';
import { Radio, Fieldset, Link } from "@trussworks/react-uswds";
import { PRODUCT_TYPE, useFormDataContext } from '@/_components/FormDataProvider';

export default function Home() {
  const { formData, updateFormData } = useFormDataContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData(PRODUCT_TYPE, event.target.value);
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
              value="cosmeticProductType" 
              name="ProductType" 
              label="Cosmetic" 
              checked={formData[PRODUCT_TYPE] === 'cosmeticProductType'}
              onChange={handleChange} 
            />
            <Radio 
              id="drugProductType" 
              value="drugProductType" 
              name="ProductType" 
              label="Drug" 
              checked={formData[PRODUCT_TYPE] === 'drugProductType'}
              onChange={handleChange} 
            />
            <Radio 
              id="supplementProductType" 
              value="supplementProductType" 
              name="ProductType" 
              label="Dietary Supplement" 
              checked={formData[PRODUCT_TYPE] === 'supplementProductType'}
              onChange={handleChange} 
            />
            <Radio 
              id="foodProductType" 
              value="foodProductType" 
              name="ProductType" 
              label="Food" 
              checked={formData[PRODUCT_TYPE] === 'foodProductType'}
              onChange={handleChange} 
            />
            <Radio 
              id="deviceProductType" 
              value="deviceProductType" 
              name="ProductType" 
              label="Medical Device" 
              checked={formData[PRODUCT_TYPE] === 'deviceProductType'}
              onChange={handleChange} 
            />
            <Radio 
              id="tobaccoProductType" 
              value="tobaccoProductType" 
              name="ProductType" 
              label="Tobacco" 
              checked={formData[PRODUCT_TYPE] === 'tobaccoProductType'}
              onChange={handleChange} 
            />
            <Radio 
              id="vaccineProductType" 
              value="vaccineProductType" 
              name="ProductType" 
              label="Vaccine" 
              checked={formData[PRODUCT_TYPE] === 'vaccineProductType'}
              onChange={handleChange} 
            />
            <Radio 
              id="veterinaryProductType" 
              value="veterinaryProductType" 
              name="ProductType" 
              label="Veterinary (animal food, drug, or device)" 
              checked={formData[PRODUCT_TYPE] === 'veterinaryProductType'}
              onChange={handleChange} 
            />
            <Radio 
              id="otherProductType"
              value="otherProductType"
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
