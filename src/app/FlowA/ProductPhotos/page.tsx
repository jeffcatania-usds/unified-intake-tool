"use client";

import { FileInput, Fieldset } from "@trussworks/react-uswds";
import {
  PRODUCT_PHOTOS,
  useUserDataContext,
} from "@/_contexts/UserDataProvider";
import NavigateBack from "@/_components/NavigateBack";
import NavigateNext from "@/_components/NavigateNext";

export default function ProductPhotos() {
  const screenName = "ProductPhotos";
  const { userData, updateUserData } = useUserDataContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateUserData(PRODUCT_PHOTOS, event.target.value);
  };

  return (
    <>
      <NavigateBack userData={userData} screenName={screenName} />
      <p>Upload product photos (optional)</p>
      <div className="usa-hint margin-bottom-2" id="product-photos-hint">
        Include a photo of anywhere there is text on the package, product, and
        instructions.
        <br />
        <br />
        Include photos of anything wrong with the product.
      </div>
      <Fieldset
        legend="Upload product photos"
        legendStyle="srOnly"
        className="margin-bottom-3"
      >
        <FileInput
          id="productPhotosFileInput"
          name="productPhotosFileInput"
          accept="image/*"
          aria-describedby="product-photos-hint"
          onChange={handleChange}
          multiple
        />
      </Fieldset>
      <NavigateNext userData={userData} screenName={screenName} />
    </>
  );
}
