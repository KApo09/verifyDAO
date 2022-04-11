import { ReactElement } from 'react';
import { ActivateDeactivate } from './components/ActivateDeactivate';
import { Greeter } from './components/Greeter';
import { SectionDivider } from './components/SectionDivider';
import { SignMessage } from './components/SignMessage';
import { WalletStatus } from './components/WalletStatus';


export function App(): ReactElement {
  return (
    <div className='grid gap-5'>
      <ActivateDeactivate />
      <SectionDivider />
      <WalletStatus />
      <SectionDivider />
      <SignMessage />
      <SectionDivider />
      <Greeter />
    </div>
  );
}
