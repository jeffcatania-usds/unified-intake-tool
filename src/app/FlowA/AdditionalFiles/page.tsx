"use client";

import { FileInput, Fieldset } from "@trussworks/react-uswds";
import {
  ADDITIONAL_FILES,
  useUserDataContext,
} from "@/_contexts/UserDataProvider";
import NavigateBack from "@/_components/NavigateBack";
import NavigateNext from "@/_components/NavigateNext";

export default function AdditionalFiles() {
  const screenName = "AdditionalFiles";
  const { userData, updateUserData } = useUserDataContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateUserData(ADDITIONAL_FILES, event.target.value);
  };

  return (
    <>
      <NavigateBack userData={userData} screenName={screenName} />
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
      <NavigateNext userData={userData} screenName={screenName} />
    </>
  );
}
