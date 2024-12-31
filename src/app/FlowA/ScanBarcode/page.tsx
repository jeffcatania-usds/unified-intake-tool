'use client'

import NextLink from 'next/link';
import { FileInput, Fieldset, Link } from "@trussworks/react-uswds";

export default function ScanBarcode() {
 
  return (
    <>
        <div  className='margin-bottom-2 margin-top-2'>
            <NextLink href="/FlowA/SubmissionType" passHref legacyBehavior><Link variant="nav">&lt; Back</Link></NextLink>
        </div>
        <p>Scan barcode (optional)</p>
        <div  className='margin-bottom-2 margin-top-2'>
            <NextLink href="/FlowA/SubmissionType" passHref legacyBehavior><Link variant="nav">Skip this step</Link></NextLink>
        </div>
        <div className="usa-hint margin-bottom-2" id="barcode-hint">
          Find the barcode on the package. Open your camera application and take a photo of the barcode.<br /><br />
          Make sure there is good lighting and the barcode is fully visible in the frame.
        </div>
        <Fieldset legend="Scan barcode" legendStyle="srOnly" className="margin-bottom-3">
            <FileInput 
              id="barcodeFileInput" 
              name="barcodeFileInput" 
              accept="image/*"
              aria-describedby="barcode-hint"
              multiple
            />
        </Fieldset>
        <div style={{width: '100%', textAlign: 'center'}}>
            <NextLink href="/FlowA/ProductType" passHref legacyBehavior><Link className="usa-button padding-left-6 padding-right-6" variant="unstyled" allowSpacebarActivation>Save and continue</Link></NextLink>
        </div>
    </>
  );
}
