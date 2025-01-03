"use client";

import NextLink from "next/link";
import { TextInput, Fieldset, Link } from "@trussworks/react-uswds";
import { NDC_NUMBER, useUserDataContext } from "@/_contexts/UserDataProvider";
import { previousScreen, nextScreen } from "@/_utils/Navigation";

export default function NDCNumber() {
  const { userData, updateUserData } = useUserDataContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateUserData(NDC_NUMBER, event.target.value);
  };
  return (
    <>
      <div className="margin-bottom-2 margin-top-2">
        <NextLink
          href={previousScreen("NDCNumber", userData)}
          passHref
          legacyBehavior
        >
          <Link variant="nav">&lt; Back</Link>
        </NextLink>
      </div>
      <p title="National Drug Code">
        NDC number (optional)
        <br />
        <span className="usa-hint">
          The code is 10 numbers, such as 12345-6789-01.
        </span>
      </p>
      <Fieldset
        legend="NDC number"
        legendStyle="srOnly"
        className="margin-bottom-3"
      >
        <TextInput
          id="ndcNumber"
          name="ndcNumber"
          type="number"
          value={userData[NDC_NUMBER]}
          onChange={handleChange}
        />
      </Fieldset>
      <div className="margin-bottom-2 margin-top-2">
        <NextLink
          href={nextScreen("NDCNumber", userData)}
          passHref
          legacyBehavior
        >
          <Link variant="nav">Skip this step</Link>
        </NextLink>
      </div>
      <div style={{ width: "100%", textAlign: "center" }}>
        <NextLink
          href={nextScreen("NDCNumber", userData)}
          passHref
          legacyBehavior
        >
          <Link
            className="usa-button padding-left-6 padding-right-6"
            variant="unstyled"
            allowSpacebarActivation
          >
            Save and continue
          </Link>
        </NextLink>
      </div>
    </>
  );
}
