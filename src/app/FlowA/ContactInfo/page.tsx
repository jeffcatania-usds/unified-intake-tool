'use client'

import NextLink from 'next/link';
import { TextInput, Link, FormGroup, ErrorMessage, Label } from "@trussworks/react-uswds";
import { CONTACT_FIRST_NAME, CONTACT_LAST_NAME, CONTACT_EMAIL, useUserDataContext } from '@/_contexts/UserDataProvider';
import { previousScreen, nextScreen } from '@/_utils/Navigation';
import React, { useState } from 'react';
import { z } from "zod";

export default function ContactInfo() {
  const { userData, updateUserData } = useUserDataContext();
  const [ validated, setValidated ] = useState(false);

  const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateUserData(CONTACT_FIRST_NAME, event.target.value);
  }

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateUserData(CONTACT_LAST_NAME, event.target.value);
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateUserData(CONTACT_EMAIL, event.target.value);
  }

  const validate = (event: React.ChangeEvent) => {
    if (!isValid()) {
      event.preventDefault();
      setValidated(true);
      return false;
    }
    return true;
  }

  const emailSchema = z.string().email();

  const isValid = () => {
    return !userData[CONTACT_EMAIL] || emailSchema.safeParse(userData[CONTACT_EMAIL]).success;
  }

  return (
    <>
        <div  className='margin-bottom-2 margin-top-2'>
            <NextLink href={previousScreen("ContactInfo", userData)} passHref legacyBehavior><Link variant="nav">&lt; Back</Link></NextLink>
        </div>
        <p>
          Can we contact you? (optional)<br />
          <span className="usa-hint">We will only contact you to ask questions about this product complaint. We will not share your information with anyone else.</span>
        </p>
        <div  className='margin-bottom-2 margin-top-2'>
            <NextLink href={nextScreen("ContactInfo", userData)} passHref legacyBehavior><Link variant="nav">Skip this step</Link></NextLink>
        </div>
        <FormGroup className="margin-top-2 margin-bottom-2">
            <Label htmlFor="firstName">
              First or given name (optional)<br />
              <span className="usa-hint">For example, Jose, Darren, or Mai</span>
            </Label>
            <TextInput 
              id="firstName" 
              name="firstName" 
              type="text"
              value={userData[CONTACT_FIRST_NAME]}
              onChange={handleFirstNameChange} 
            />
        </FormGroup>
        <FormGroup className="margin-top-2 margin-bottom-2">
            <Label htmlFor="lastName">
              Last or family name (optional)<br />
              <span className="usa-hint">For example, Martinez Gonzalez, Gu, or Smith</span>
            </Label>
            <TextInput 
              id="lastName" 
              name="lastName" 
              type="text"
              value={userData[CONTACT_LAST_NAME]}
              onChange={handleLastNameChange} 
            />
        </FormGroup>
        <FormGroup error={validated && !isValid()}>
          <Label htmlFor="email">
            Email address (optional)<br />
            <span className="usa-hint">For example, Name@domain.com</span>
          </Label>
          { validated && !isValid() && 
            <ErrorMessage id="email-error">
              Please provide the product name.
            </ErrorMessage>
          }
          <TextInput 
            id="email" 
            name="email" 
            type="email"
            value={userData[CONTACT_EMAIL]}
            onChange={handleEmailChange} 
          />
        </FormGroup>
        <div style={{width: '100%', textAlign: 'center'}}>
            <NextLink href={nextScreen("ContactInfo", userData)} passHref legacyBehavior><Link onClick={validate} className="usa-button padding-left-6 padding-right-6" variant="unstyled" allowSpacebarActivation>Save and continue</Link></NextLink>
        </div>
    </>
  );
}
