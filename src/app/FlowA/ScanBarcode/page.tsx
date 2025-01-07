"use client";

import { FileInput, FormGroup, Label } from "@trussworks/react-uswds";
import { BARCODE, useUserDataContext } from "@/_contexts/UserDataProvider";
import NavigateBack from "@/_components/NavigateBack";
import NavigateNext from "@/_components/NavigateNext";
import NavigateSkip from "@/_components/NavigateSkip";
import { ScanBarcodeMetadata } from "./metadata";

export default function ScanBarcode() {
  const screenName = ScanBarcodeMetadata.name;
  const { userData, updateUserData } = useUserDataContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateUserData(BARCODE, event.target.value);
  };

  return (
    <>
      <NavigateBack userData={userData} screenName={screenName} />
      <NavigateSkip userData={userData} screenName={screenName} />
      <FormGroup>
        <Label htmlFor="barcodeFileInput">
          Scan barcode (optional)
          <div className="usa-hint margin-bottom-2" id="barcode-hint">
            Find the barcode on the package. Open your camera application and
            take a photo of the barcode.
            <br />
            <br />
            Make sure there is good lighting and the barcode is fully visible in
            the frame.
          </div>
        </Label>
        <FileInput
          id="barcodeFileInput"
          name="barcodeFileInput"
          accept="image/*"
          aria-describedby="barcode-hint"
          onChange={handleChange}
          multiple
        />
      </FormGroup>
      <NavigateNext userData={userData} screenName={screenName} />
    </>
  );
}
