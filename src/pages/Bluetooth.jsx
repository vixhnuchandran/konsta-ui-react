import React, { useState } from 'react';

import {
  Page,
  Navbar,
  NavbarBackLink,
  List,
  ListItem,
  Toggle,
} from 'konsta/react';
import { BluetoothIcon } from '../components/Icons';

export default function BluetoothPage() {
  const [btState, setBtOn] = useState(false);

  return (
    <Page>
      <Navbar
        title="Bluetooth"
        left={<NavbarBackLink onClick={() => history.back()} />}
      />
      <div className="flex-col mt-3">
        <List>
          <ListItem
            label
            title="Bluetooth"
            after={
              <Toggle
                component="div"
                className="-my-1"
                checked={btState}
                onChange={() => setBtOn(!btState)}
              />
            }
          />
        </List>
      </div>
    </Page>
  );
}
BluetoothPage.displayName = 'BluetoothPage';
BluetoothPage.icon = BluetoothIcon;
