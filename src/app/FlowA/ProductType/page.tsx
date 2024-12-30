import NextLink from 'next/link';
import { Radio, Fieldset, Link } from "@trussworks/react-uswds";

export default function Home() {
  return (
    <>
        <div  className='margin-bottom-2'>
            <NextLink href="/FlowA" passHref legacyBehavior><Link variant="nav">&lt; Back</Link></NextLink>
        </div>
        <p>What was the product?<abbr title="required" className="usa-hint usa-hint--required text-no-underline">*</abbr></p>
        <Fieldset legend="What was the product?" legendStyle="srOnly" className="margin-bottom-3">
            <Radio id="cosmeticProductType" name="ProductType" label="Cosmetic" />
            <Radio id="drugProductType" name="ProductType" label="Drug" />
            <Radio id="supplementProductType" name="ProductType" label="Dietary Supplement" />
            <Radio id="foodProductType" name="ProductType" label="Food" />
            <Radio id="deviceProductType" name="ProductType" label="Medical Device" />
            <Radio id="tobaccoProductType" name="ProductType" label="Tobacco" />
            <Radio id="vaccineProductType" name="ProductType" label="Vaccine" />
            <Radio id="veterinaryProductType" name="ProductType" label="Veterinary (animal food, drug, or device)" />
            <Radio id="otherProductType" name="ProductType" label="Other / Don't know" />
        </Fieldset>
        <div style={{width: '100%', textAlign: 'center'}}>
            <NextLink href="/FlowA/ProductType" passHref legacyBehavior><Link className="usa-button padding-left-2 padding-right-2" variant="unstyled" allowSpacebarActivation>Save and continue</Link></NextLink>
        </div>
    </>
  );
}
