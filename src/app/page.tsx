import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1 className="font-ui-lg text-semibold">Report a problem</h1>
      <p>We review every submission. We use this information to monitor the safety of FDA-regulated products. </p>
      <p>We will ask you for the product information, what happened, and any photos of the product.  </p>
      <p>We are unable to answer questions about submissions. You can check <a href="https://www.fda.gov/safety/recalls-market-withdrawals-safety-alerts">the current list of recalled products</a>. </p>
      <p>We will reach out if we have any questions.</p>
      <div style={{width: '100%', textAlign: 'center'}}>
        <Link href="/FlowA"><button className="usa-button" type="button" style={{width: '100%', textAlign: 'center'}}>Get Started</button></Link>
      </div>
    </>
  );
}
