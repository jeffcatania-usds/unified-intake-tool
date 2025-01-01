'use client'

import NextLink from 'next/link';
import { Checkbox, Fieldset, Link } from "@trussworks/react-uswds";
import { SUBMISSION_TYPE, useUserDataContext } from '@/_contexts/UserDataProvider';
import { previousScreen, nextScreen } from '@/_utils/Navigation';

export default function SubmissionType() {
  const { userData, updateUserData } = useUserDataContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof userData[SUBMISSION_TYPE] === "object") {
      const previous = userData[SUBMISSION_TYPE];
      const indexOfValue = previous.indexOf(event.target.value);
      if (indexOfValue >= 0) {
        previous.splice(indexOfValue, 1);
        updateUserData(SUBMISSION_TYPE, previous);
      } else {
        updateUserData(SUBMISSION_TYPE, [...previous, event.target.value]);
      }
    } else {
      updateUserData(SUBMISSION_TYPE, [event.target.value]);
    }
  }
  return (
    <>
        <div  className='margin-bottom-2 margin-top-2'>
            <NextLink href={previousScreen("SubmissionType", userData)} passHref legacyBehavior><Link variant="nav">&lt; Back</Link></NextLink>
        </div>
        <p>
          Tell us what happened<abbr title="required" className="usa-hint usa-hint--required text-no-underline">*</abbr><br />
          <span className="usa-hint">Select all that apply</span>
        </p>
        <Fieldset legend="Tell us what happened" legendStyle="srOnly" className="margin-bottom-3">
            <Checkbox 
              id="someoneWasHarmedSubmissionType" 
              value="someoneWasHarmedSubmissionType" 
              name="SubmissionType" 
              label="Someone was harmed" 
              checked={userData[SUBMISSION_TYPE]?.includes('someoneWasHarmedSubmissionType')}
              onChange={handleChange} 
              tile
            />
            <Checkbox 
              id="someoneUsedAProductIncorrectlySubmissionType" 
              value="someoneUsedAProductIncorrectlySubmissionType" 
              name="SubmissionType" 
              label="Someone used a product incorrectly" 
              checked={userData[SUBMISSION_TYPE]?.includes('someoneUsedAProductIncorrectlySubmissionType')}
              onChange={handleChange} 
              tile
            />
            <Checkbox 
              id="somethingWasWrongWithAProductSubmissionType" 
              value="somethingWasWrongWithAProductSubmissionType" 
              name="SubmissionType" 
              label="Something was wrong with a product" 
              checked={userData[SUBMISSION_TYPE]?.includes('somethingWasWrongWithAProductSubmissionType')}
              onChange={handleChange} 
              tile
            />
            <Checkbox 
              id="illegalActivityOrFraudSubmissionType" 
              value="illegalActivityOrFraudSubmissionType" 
              name="SubmissionType" 
              label="Illegal activity or fraud" 
              checked={userData[SUBMISSION_TYPE]?.includes('illegalActivityOrFraudSubmissionType')}
              onChange={handleChange} 
              tile
            />
        </Fieldset>
        <div style={{width: '100%', textAlign: 'center'}}>
            <NextLink href={nextScreen("SubmissionType", userData)} passHref legacyBehavior><Link className="usa-button padding-left-6 padding-right-6" variant="unstyled" allowSpacebarActivation>Save and continue</Link></NextLink>
        </div>
    </>
  );
}
