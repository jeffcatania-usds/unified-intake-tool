"use client";

import {
  useUserDataContext,
  CONTACT_EMAIL,
} from "@/_contexts/UserDataProvider";

export default function ReviewScreen() {
  const { userData } = useUserDataContext();

  return (
    <>
      <h1 className="font-ui-lg text-bold">Report successfully submitted</h1>
      <p className="margin-bottom-2">
        Thank you for submitting report{" "}
        <span className="text-bold">123456</span>.
      </p>
      <p className="margin-bottom-2">
        We usually look at submissions within 2 weeks, to track the safety of
        FDA-regulated products and to take action on safety problems.
      </p>
      {userData[CONTACT_EMAIL] && (
        <p className="margin-bottom-2">
          If we need additional information, we will reach out to you directly.
        </p>
      )}
      <p className="margin-bottom-2">
        Because of the volume of reports we receive, we cannot answer questions
        about your submission.
      </p>
      <p className="margin-bottom-2">
        If you want to add more information, submit a new report. Include case
        number <span className="text-bold">[123456]</span> so we can connect
        your reports.
      </p>
    </>
  );
}
