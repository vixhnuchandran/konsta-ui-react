import { React } from 'react';
import { Page, Navbar, NavbarBackLink, List, ListItem } from 'konsta/react';

import { AppsIcon } from '../components/Icons';

export default function AppsPage() {
  return (
    <Page className="ios:bg-white ios:dark:bg-black">
      <Navbar
        title="Apps"
        left={<NavbarBackLink onClick={() => history.back()} />}
      />{' '}
      <div className="flex-col items-start mt-3 pl-2">
        <List dividers={false}>
          <ListItem label title="System app settings" />
          <ListItem label title="Manage apps" />
          <ListItem label title="Dual apps" />

          <ListItem label title="Permissions" />
          <ListItem label title="App lock" />
        </List>
      </div>
    </Page>
  );
}

AppsPage.displayName = 'AppsPage';
AppsPage.icon = AppsIcon;
