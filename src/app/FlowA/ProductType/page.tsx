import Link from 'next/link';
import { Radio, Fieldset } from "@trussworks/react-uswds";

export default function Home() {
  return (
    <>
        <Link href="/FlowA">&lt; Back</Link>
        <p>What was the product?<abbr title="required" className="usa-hint usa-hint--required">*</abbr></p>
        <Fieldset legend="What was the product?" legendStyle="srOnly">
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
            <Link href="/FlowA/ProductType"><button className="usa-button" type="button" style={{width: '100%', textAlign: 'center'}}>Save and continue</button></Link>
        </div>
    </>
  );
}
