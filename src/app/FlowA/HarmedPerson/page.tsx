'use client'

import NextLink from 'next/link';
import { Checkbox, Fieldset, Link, ErrorMessage, FormGroup, TextInput, Select, CharacterCount, Label } from "@trussworks/react-uswds";
import { HARMED_AGE, HARMED_AGE_UNIT, HARMED_GENDER, HARMED_GENDER_OTHER, HARMED_MEDICAL, useUserDataContext } from '@/_contexts/UserDataProvider';
import { previousScreen, nextScreen } from '@/_utils/Navigation';
import React, { useState } from 'react';
import { z } from "zod";

export default function HarmedPerson() {
  const { userData, updateUserData } = useUserDataContext();
  const [ validated, setValidated ] = useState(false);

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateUserData(HARMED_AGE, event.target.value);
  }

  const handleAgeUnitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateUserData(HARMED_AGE_UNIT, event.target.value);
  }

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Special case because NA disables other gender options
    if (event.target.value == 'naGender') {
      if (userData[HARMED_GENDER]?.includes('naGender')) {
        updateUserData(HARMED_GENDER, []);
      } else {
        updateUserData(HARMED_GENDER, ['naGender']);
      }
      return;
    }

    if (typeof userData[HARMED_GENDER] === "object") {
      const previous = userData[HARMED_GENDER];
      const indexOfValue = previous.indexOf(event.target.value);
      if (indexOfValue >= 0) {
        previous.splice(indexOfValue, 1);
        updateUserData(HARMED_GENDER, previous);
      } else {
        updateUserData(HARMED_GENDER, [...previous, event.target.value]);
      }
    } else {
      updateUserData(HARMED_GENDER, [event.target.value]);
    }
  }

  const handleGenderOtherChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateUserData(HARMED_GENDER_OTHER, event.target.value);
  }

  const handleMedicalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateUserData(HARMED_MEDICAL, event.target.value);
  }

  const validate = (event: React.ChangeEvent) => {
    if (!isValid()) {
      event.preventDefault();
      setValidated(true);
      return false;
    }
    return true;
  }

  const ageSchema = z.number();

  const isValid = () => {
    return !userData[HARMED_AGE] || ageSchema.safeParse(userData[HARMED_AGE]).success;
  }

  return (
    <>
        <div  className='margin-bottom-2 margin-top-2'>
            <NextLink href={previousScreen("HarmedPerson", userData)} passHref legacyBehavior><Link variant="nav">&lt; Back</Link></NextLink>
        </div>
        <p>
          Tell us about who was harmed (optional)<br />
          <span className="usa-hint">We use this information to track product problems and conduct investigations.</span>
        </p>
        <div  className='margin-bottom-2 margin-top-2'>
            <NextLink href={nextScreen("HarmedPerson", userData)} passHref legacyBehavior><Link variant="nav">Skip this step</Link></NextLink>
        </div>
        <FormGroup error={validated && !isValid()} className='margin-bottom-2'>
          <Label htmlFor="age-text">Age (optional)</Label>
          { validated && !isValid() && 
            <ErrorMessage id="age-error">
              Please enter a valid age.
            </ErrorMessage>
          }
          <TextInput id="age-text" name="age-text" type="number" onChange={handleAgeChange} className="usa-input--2xs float-left margin-right-2" />
          <Select id="age-unit" name="age-unit" onChange={handleAgeUnitChange} className="usa-input--sm">
            <option value="years">Years</option>
            <option value="months">Months</option>
            <option value="days">Days</option>
          </Select>
        </FormGroup>
        <p>
          Gender (optional)<br />
          <span className="usa-hint">Select all that apply</span>
        </p>
        <Fieldset legend="Gender" legendStyle="srOnly" className="margin-bottom-3">
            <Checkbox 
              id="femaleGender" 
              value="femaleGender" 
              name="gender" 
              label="Female" 
              checked={userData[HARMED_GENDER]?.includes('femaleGender')}
              onChange={handleGenderChange} 
              disabled={userData[HARMED_GENDER]?.includes('naGender')}
              tile
            />
            <Checkbox 
              id="maleGender" 
              value="maleGender" 
              name="gender" 
              label="Male" 
              checked={userData[HARMED_GENDER]?.includes('maleGender')}
              onChange={handleGenderChange} 
              disabled={userData[HARMED_GENDER]?.includes('naGender')}
              tile
            />
            <Checkbox 
              id="transGender" 
              value="transGender" 
              name="gender" 
              label="Transgender" 
              checked={userData[HARMED_GENDER]?.includes('transGender')}
              onChange={handleGenderChange} 
              disabled={userData[HARMED_GENDER]?.includes('naGender')}
              tile
            />
            <Checkbox 
              id="anotherGender" 
              value="anotherGender" 
              name="gender" 
              label="Another gender (specify)" 
              checked={userData[HARMED_GENDER]?.includes('anotherGender')}
              onChange={handleGenderChange} 
              disabled={userData[HARMED_GENDER]?.includes('naGender')}
              tile
            />
            <Checkbox 
              id="naGender" 
              value="naGender" 
              name="gender" 
              label="Prefer not to say" 
              checked={userData[HARMED_GENDER]?.includes('naGender')}
              onChange={handleGenderChange} 
              tile
            />
        </Fieldset>
        {userData[HARMED_GENDER]?.includes('anotherGender') && 
          <FormGroup>
            <Label htmlFor="gender-other">Other gender</Label>
            <TextInput
              id="gender-other"
              name="gender-other"
              onChange={handleGenderOtherChange}
            />
          </FormGroup>
        }
        <FormGroup>
            <Label htmlFor="medical-text">
              Provide their medical details (optional)<br />
              <span className="usa-hint">List any prescriptions taken at the same time or allergies</span>
            </Label>
            <CharacterCount 
              id="medical-text" 
              name="medical-text" 
              isTextArea={true}
              value={userData[HARMED_MEDICAL]}
              onChange={handleMedicalChange} 
              maxLength={8000}
            />
        </FormGroup>

        <div style={{width: '100%', textAlign: 'center'}}>
            <NextLink href={nextScreen("HarmedPerson", userData)} passHref legacyBehavior><Link onClick={validate} className="usa-button padding-left-6 padding-right-6" variant="unstyled" allowSpacebarActivation>Save and continue</Link></NextLink>
        </div>
    </>
  );
}
