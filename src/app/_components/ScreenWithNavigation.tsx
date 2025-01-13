"use client";

import { Form } from "@trussworks/react-uswds";
import NavigateBack from "./NavigateBack";
import NavigateNext from "./NavigateNext";
import NavigateBackB from "./NavigateBackB";

export default function ScreenWithNavigation({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Form large={true} className="padding-9 padding-top-0">
      <NavigateBack />
      {children}
      <NavigateNext />
      <NavigateBackB />
    </Form>
  );
}
