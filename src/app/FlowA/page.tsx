import OverviewProcessList from "../_components/OverviewProcessList";
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h2>Report a problem</h2>
      <p>Please tell us about</p>
      <OverviewProcessList />
      <div style={{width: '100%', textAlign: 'center'}}>
        <Link href="/FlowA/ProductType"><button className="usa-button" type="button" style={{width: '100%', textAlign: 'center'}}>Next</button></Link>
      </div>
    </>
  );
}
