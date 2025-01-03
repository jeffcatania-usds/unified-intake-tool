"use client";

import NextLink from "next/link";
import { FileInput, Fieldset, Link } from "@trussworks/react-uswds";
import {
  PRODUCT_PHOTOS,
  useUserDataContext,
} from "@/_contexts/UserDataProvider";
import { previousScreen, nextScreen } from "@/_utils/Navigation";

export default function ProductPhotos() {
  const { userData, updateUserData } = useUserDataContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateUserData(PRODUCT_PHOTOS, event.target.value);
  };

  return (
    <>
      <div className="margin-bottom-2 margin-top-2">
        <NextLink
          href={previousScreen("ProductPhotos", userData)}
          passHref
          legacyBehavior
        >
          <Link variant="nav">&lt; Back</Link>
        </NextLink>
      </div>
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
      <div style={{ width: "100%", textAlign: "center" }}>
        <NextLink
          href={nextScreen("ProductPhotos", userData)}
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
