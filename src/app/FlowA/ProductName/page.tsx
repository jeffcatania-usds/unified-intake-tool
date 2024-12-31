'use client'

import NextLink from 'next/link';
import { TextInput, Fieldset, Link } from "@trussworks/react-uswds";
import { PRODUCT_NAME, useUserDataContext } from '@/_contexts/UserDataProvider';

export default function ProductName() {
  const { userData, updateUserData } = useUserDataContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateUserData(PRODUCT_NAME, event.target.value);
  }
  return (
    <>
        <div  className='margin-bottom-2 margin-top-2'>
            <NextLink href="/FlowA/ProductPhotos" passHref legacyBehavior><Link variant="nav">&lt; Back</Link></NextLink>
        </div>
        <p>Product name<abbr title="required" className="usa-hint usa-hint--required text-no-underline">*</abbr><br />
          <span className="usa-hint">Include as much detail as possible, including the brand.</span>
        </p>
        <Fieldset legend="Product name" legendStyle="srOnly" className="margin-bottom-3">
            <TextInput 
              id="productName" 
              name="productName" 
              type="text"
              value={userData[PRODUCT_NAME]}
              onChange={handleChange} 
            />
        </Fieldset>
        <div style={{width: '100%', textAlign: 'center'}}>
            <NextLink href="/FlowA/ProductPhotos" passHref legacyBehavior><Link className="usa-button padding-left-6 padding-right-6" variant="unstyled" allowSpacebarActivation>Save and continue</Link></NextLink>
        </div>
    </>
  );
}
