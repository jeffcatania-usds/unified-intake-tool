"use client";

import {
  CONTACT_FIRST_NAME,
  CONTACT_LAST_NAME,
  CONTACT_EMAIL,
  useUserDataContext,
} from "@/_contexts/UserDataProvider";
import { ContactInfoBMetadata } from "./metadata";
import ReviewSection from "@/_components/ReviewSection";

export default function ContactInfoBReview() {
  const { userData } = useUserDataContext();

  const fullName =
    userData[CONTACT_FIRST_NAME] + " " + userData[CONTACT_LAST_NAME];

  return (
    <ReviewSection metadata={ContactInfoBMetadata}>
      {fullName.trim() ? fullName : "Name not provided"}
      <br />
      {userData[CONTACT_EMAIL]
        ? userData[CONTACT_EMAIL]
        : "Email address not provided"}
    </ReviewSection>
  );
}
