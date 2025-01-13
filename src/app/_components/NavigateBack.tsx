import NextLink from "next/link";
import { Link } from "@trussworks/react-uswds";
import { previousScreen } from "@/_utils/Navigation";
import { UserData } from "@/_contexts/UserDataProvider";

interface NavigateBackProps {
  screenName: string;
  userData: UserData;
}

const NavigateBack = ({ screenName, userData }: NavigateBackProps) => (
  <div className="margin-bottom-2 margin-top-2">
    <NextLink
      href={previousScreen(screenName, userData)}
      passHref
      legacyBehavior
    >
      <Link variant="nav">&lt; Back</Link>
    </NextLink>
  </div>
);

export default NavigateBack;
