'use client'

import OverviewProcessList from "@/components/OverviewProcessList";
import Link from 'next/link';
import { nextScreen } from '@/_utils/Navigation';
import { useUserDataContext } from '@/_contexts/UserDataProvider';

export default function FlowA() {
  const { userData } = useUserDataContext();

  return (
    <>
      <h1 className="font-ui-xl text-bold">Report a problem</h1>
      <p>Please tell us about</p>
      <OverviewProcessList />
      <div style={{width: '100%', textAlign: 'center'}}>
        <Link href={nextScreen("FlowAOverview", userData)}><button className="usa-button" type="button" style={{width: '100%', textAlign: 'center'}}>Next</button></Link>
      </div>
    </>
  );
}
