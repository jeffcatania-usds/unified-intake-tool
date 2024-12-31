import OverviewProcessList from "@/components/OverviewProcessList";
import Link from 'next/link';

export default function FlowA() {
  return (
    <>
      <h1 className="font-ui-xl text-bold">Report a problem</h1>
      <p>Please tell us about</p>
      <OverviewProcessList />
      <div style={{width: '100%', textAlign: 'center'}}>
        <Link href="/FlowA/ProductType"><button className="usa-button" type="button" style={{width: '100%', textAlign: 'center'}}>Next</button></Link>
      </div>
    </>
  );
}
