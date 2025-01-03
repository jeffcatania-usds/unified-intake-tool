import NextLink from "next/link";
import { Link } from "@trussworks/react-uswds";
import { nextScreen } from "@/_utils/Navigation";
import { UserData } from "@/_contexts/UserDataProvider";

interface NavigateSkipProps {
  screenName: string;
  userData: UserData;
  validate?: (event: React.ChangeEvent) => boolean;
}

const NavigateSkip = ({
  screenName,
  userData,
  validate,
}: NavigateSkipProps) => (
  <div className="margin-bottom-2 margin-top-2">
    <NextLink href={nextScreen(screenName, userData)} passHref legacyBehavior>
      <Link onClick={validate} variant="nav">
        Skip this step
      </Link>
    </NextLink>
  </div>
);

export default NavigateSkip;
