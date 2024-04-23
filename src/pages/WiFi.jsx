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
import { WifiIcon } from '../components/Icons';

export default function WiFiPage() {
  const [wifiState, setWifiOn] = useState(false);

  return (
    <Page>
      <Navbar
        title="WiFi"
        left={<NavbarBackLink onClick={() => history.back()} />}
      />

      <div className="flex-col items-start mt-3 pl-2">
        <List>
          <ListItem
            label
            title="Wi-Fi"
            after={
              <Toggle
                component="div"
                className="-my-1"
                checked={wifiState}
                onChange={() => setWifiOn(!wifiState)}
              />
            }
          />
        </List>
      </div>
    </Page>
  );
}
WiFiPage.displayName = 'WiFiPage';
WiFiPage.icon = WifiIcon;
