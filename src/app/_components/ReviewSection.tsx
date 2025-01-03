import NextLink from "next/link";
import { Link } from "@trussworks/react-uswds";
import { ScreenMetadata } from "@/_utils/ScreenMetadata";

interface ReviewSectionProps {
  children: React.ReactNode;
  metadata: ScreenMetadata;
}

const ReviewSection = ({ metadata, children }: ReviewSectionProps) => (
  <div className="margin-bottom-2 margin-top-2">
    <div>
      <span className="text-bold">{metadata.title} </span>
      <NextLink href={metadata.route} passHref legacyBehavior>
        <Link variant="nav">Edit</Link>
      </NextLink>
    </div>
    <div>{children}</div>
  </div>
);

export default ReviewSection;
