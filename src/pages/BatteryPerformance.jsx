import React from 'react';
import { Page, Navbar, NavbarBackLink } from 'konsta/react';
import { BatteryPerformanceIcon } from '../components/Icons';

export default function BatteryPerformancePage() {
  return (
    <Page>
      <Navbar
        title="Battery performance"
        left={<NavbarBackLink onClick={() => history.back()} />}
      />
    </Page>
  );
}
BatteryPerformancePage.displayName = 'BatteryPerformancePage';
BatteryPerformancePage.icon = BatteryPerformanceIcon;
