"use client";

import { FileInput, FormGroup, Label } from "@trussworks/react-uswds";
import { BARCODE, useUserDataContext } from "@/_contexts/UserDataProvider";
import NavigateSkip from "@/_components/NavigateSkip";
import { ScanBarcodeMetadata } from "./metadata";
import { useNavigationContext } from "@/_contexts/NavigationProvider";
import { useEffect } from "react";

export default function ScanBarcode() {
  const screenName = ScanBarcodeMetadata.name;
  const { userData, updateUserData } = useUserDataContext();
  const { setCurrentScreen } = useNavigationContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateUserData(BARCODE, event.target.value);
  };

  useEffect(() => {
    setCurrentScreen(screenName);
  });

  return (
    <>
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
    </>
  );
}
