import { ProcessList, ProcessListItem, ProcessListHeading } from "@trussworks/react-uswds";

const OverviewProcessList = () => (
  <ProcessList>
    <ProcessListItem>
      <ProcessListHeading type="h4">The product</ProcessListHeading>
    </ProcessListItem>
    <ProcessListItem>
      <ProcessListHeading type="h4">What happened</ProcessListHeading>
    </ProcessListItem>
    <ProcessListItem>
      <ProcessListHeading type="h4">Who was harmed <span className="text-base">(optional)</span></ProcessListHeading>
    </ProcessListItem>
    <ProcessListItem>
      <ProcessListHeading type="h4">How to reach you <span className="text-base">(optional)</span></ProcessListHeading>
    </ProcessListItem>
  </ProcessList>
);

export default OverviewProcessList;