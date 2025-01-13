"use client";

import { FileInput, FormGroup, Label } from "@trussworks/react-uswds";
import {
  ADDITIONAL_FILES,
  useUserDataContext,
} from "@/_contexts/UserDataProvider";
import { AdditionalFilesMetadata } from "./metadata";
import { useNavigationContext } from "@/_contexts/NavigationProvider";
import { useEffect } from "react";

export default function AdditionalFiles() {
  const screenName = AdditionalFilesMetadata.name;
  const { updateUserData } = useUserDataContext();
  const { setCurrentScreen } = useNavigationContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateUserData(ADDITIONAL_FILES, event.target.value);
  };

  useEffect(() => {
    setCurrentScreen(screenName);
  });

  return (
    <>
      <FormGroup>
        <Label htmlFor="additionalFileInput">
          Upload any additional information (optional)
          <div className="usa-hint margin-bottom-2" id="additional-files-hint">
            This may include medical records.
          </div>
        </Label>
        <FileInput
          id="additionalFileInput"
          name="additionalFileInput"
          aria-describedby="additional-filesgit a-hint"
          onChange={handleChange}
          multiple
        />
      </FormGroup>
    </>
  );
}
