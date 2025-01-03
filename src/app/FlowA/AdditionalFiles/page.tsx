"use client";

import NextLink from "next/link";
import { FileInput, Fieldset, Link } from "@trussworks/react-uswds";
import {
  ADDITIONAL_FILES,
  useUserDataContext,
} from "@/_contexts/UserDataProvider";
import { previousScreen, nextScreen } from "@/_utils/Navigation";

export default function AdditionalFiles() {
  const { userData, updateUserData } = useUserDataContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateUserData(ADDITIONAL_FILES, event.target.value);
  };

  return (
    <>
      <div className="margin-bottom-2 margin-top-2">
        <NextLink
          href={previousScreen("AdditionalFiles", userData)}
          passHref
          legacyBehavior
        >
          <Link variant="nav">&lt; Back</Link>
        </NextLink>
      </div>
      <p>Upload any additional information (optional)</p>
      <div className="usa-hint margin-bottom-2" id="additional-files-hint">
        This may include medical records.
      </div>
      <Fieldset
        legend="Upload any additional information"
        legendStyle="srOnly"
        className="margin-bottom-3"
      >
        <FileInput
          id="additionalFileInput"
          name="additionalFileInput"
          aria-describedby="additional-filesgit a-hint"
          onChange={handleChange}
          multiple
        />
      </Fieldset>
      <div style={{ width: "100%", textAlign: "center" }}>
        <NextLink
          href={nextScreen("AdditionalFiles", userData)}
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
