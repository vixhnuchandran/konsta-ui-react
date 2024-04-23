import React from 'react';
import { useState } from 'react';

import {
  Page,
  Navbar,
  NavbarBackLink,
  List,
  ListItem,
  Toggle,
} from 'konsta/react';
import { ConnectionSharingIcon } from '../components/Icons';

export default function ConnectionSharingPage() {
  const [checked1, setChecked1] = useState(false);

  return (
    <Page>
      <Navbar
        title="Chips"
        left={<NavbarBackLink onClick={() => history.back()} />}
      />
      <div className="flex-col">
        <List dividers={false}>
          <ListItem label title="MI share" />
          <ListItem label title="Cast" />

          <ListItem label title="Printing" />

          <ListItem label title="Portable hotspot" />

          <ListItem label title="VPN" />

          <ListItem
            label
            title="Aeroplane mode"
            after={
              <Toggle
                component="div"
                className="-my-1"
                checked={checked1}
                onChange={() => setChecked1(!checked1)}
              />
            }
          />

          <ListItem label title="Data usage" />
        </List>
      </div>
    </Page>
  );
}
ConnectionSharingPage.displayName = 'ConnectionSharingPage';
ConnectionSharingPage.icon = ConnectionSharingIcon;
