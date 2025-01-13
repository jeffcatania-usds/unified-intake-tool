import NextLink from "next/link";
import { Link } from "@trussworks/react-uswds";
import { nextScreen } from "@/_utils/Navigation";
import { useUserDataContext } from "@/_contexts/UserDataProvider";
import { useNavigationContext } from "@/_contexts/NavigationProvider";

export default function NavigateNext() {
  const { userData } = useUserDataContext();
  const { navigationData } = useNavigationContext();
  return (
    navigationData.showNext && (
      <div style={{ width: "100%", textAlign: "center" }}>
        <NextLink
          href={nextScreen(navigationData.currentScreen, userData)}
          passHref
          legacyBehavior
        >
          <Link
            onClick={navigationData.validate}
            className="usa-button padding-left-6 padding-right-6"
            variant="unstyled"
            allowSpacebarActivation
          >
            {navigationData.nextButtonText
              ? navigationData.nextButtonText
              : "Save and continue"}
          </Link>
        </NextLink>
      </div>
    )
  );
}
