"use client";

import { FileInput, Fieldset } from "@trussworks/react-uswds";
import { BARCODE, useUserDataContext } from "@/_contexts/UserDataProvider";
import NavigateBack from "@/_components/NavigateBack";
import NavigateNext from "@/_components/NavigateNext";
import NavigateSkip from "@/_components/NavigateSkip";

export default function ScanBarcode() {
  const screenName = "ScanBarcode";
  const { userData, updateUserData } = useUserDataContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateUserData(BARCODE, event.target.value);
  };

  return (
    <>
      <NavigateBack userData={userData} screenName={screenName} />
      <p>Scan barcode (optional)</p>
      <NavigateSkip userData={userData} screenName={screenName} />
      <div className="usa-hint margin-bottom-2" id="barcode-hint">
        Find the barcode on the package. Open your camera application and take a
        photo of the barcode.
        <br />
        <br />
        Make sure there is good lighting and the barcode is fully visible in the
        frame.
      </div>
      <Fieldset
        legend="Scan barcode"
        legendStyle="srOnly"
        className="margin-bottom-3"
      >
        <FileInput
          id="barcodeFileInput"
          name="barcodeFileInput"
          accept="image/*"
          aria-describedby="barcode-hint"
          onChange={handleChange}
          multiple
        />
      </Fieldset>
      <NavigateNext userData={userData} screenName={screenName} />
    </>
  );
}
