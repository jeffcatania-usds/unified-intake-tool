import NextLink from "next/link";
import { Link } from "@trussworks/react-uswds";
import { previousScreen } from "@/_utils/Navigation";
import { useUserDataContext } from "@/_contexts/UserDataProvider";
import { useNavigationContext } from "@/_contexts/NavigationProvider";

export default function NavigateBack() {
  const { userData } = useUserDataContext();
  const { navigationData } = useNavigationContext();
  return (
    navigationData.showPrevious &&
    !navigationData.previousButtonBottom && (
      <div className="margin-bottom-2 margin-top-2">
        <NextLink
          href={previousScreen(navigationData.currentScreen, userData)}
          passHref
          legacyBehavior
        >
          <Link variant="nav">
            {navigationData.previousButtonText
              ? navigationData.previousButtonText
              : "&lt; Back"}
          </Link>
        </NextLink>
      </div>
    )
  );
}
