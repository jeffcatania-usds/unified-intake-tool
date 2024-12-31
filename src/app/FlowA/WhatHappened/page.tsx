'use client'

import NextLink from 'next/link';
import { FormGroup, Link, Label, CharacterCount } from "@trussworks/react-uswds";
import { WHAT_HAPPENED, useFormDataContext } from '@/_components/FormDataProvider';

export default function WhatHappened() {
  const { formData, updateFormData } = useFormDataContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData(WHAT_HAPPENED, event.target.value);
  }
  return (
    <>
        <div  className='margin-bottom-2 margin-top-2'>
            <NextLink href="/FlowA/ProductName" passHref legacyBehavior><Link variant="nav">&lt; Back</Link></NextLink>
        </div>
        <FormGroup className="margin-bottom-3">
            <Label htmlFor="whatHappened">
              Describe what happened in detail<abbr title="required" className="usa-hint usa-hint--required text-no-underline">*</abbr><br />
              <span className="usa-hint">What happened, step by step?</span>
            </Label>
            <p className="usa-hint" id="whatHappenedHint">
              When first using the product, how long did it take before problems started, and did issues go away after stopping the product?<br /><br />
              If the person harmed went to the hospital, what was the diagnosis and how was it treated?
            </p>
            <CharacterCount 
              id="whatHappened" 
              name="whatHappened" 
              isTextArea={true}
              aria-describedby="whatHappened-info whatHappenedHint"
              value={formData[WHAT_HAPPENED]}
              onChange={handleChange} 
              maxLength={4000}
            />
        </FormGroup>
        <div style={{width: '100%', textAlign: 'center'}}>
            <NextLink href="/FlowA/ProductPhotos" passHref legacyBehavior><Link className="usa-button padding-left-6 padding-right-6" variant="unstyled" allowSpacebarActivation>Save and continue</Link></NextLink>
        </div>
    </>
  );
}
