import React from 'react';
import { Page, Navbar, NavbarBackLink } from 'konsta/react';
import { AccountSyncIcon } from '../components/Icons';

export default function AccountSyncPage() {
  return (
    <Page>
      <Navbar
        title="Account sync"
        left={<NavbarBackLink onClick={() => history.back()} />}
      />
    </Page>
  );
}
AccountSyncPage.displayName = 'AccountSyncPage';
AccountSyncPage.icon = AccountSyncIcon;
