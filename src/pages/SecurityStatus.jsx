import React, { useRef, useState } from 'react';
import {
  Page,
  Navbar,
  NavbarBackLink,
  MenuList,
  MenuListItem,
} from 'konsta/react';
import { SecurityStatusIcon } from '../components/Icons';

export default function SecurityStatusPage() {
  const popoverTargetRef = useRef(null);
  const [popoverOpened, setPopoverOpened] = useState(false);
  return (
    <Page>
      <Navbar
        title="Security status"
        left={<NavbarBackLink onClick={() => history.back()} />}
      />

      <div className="flex-col">
        <div>
          <MenuList>
            <MenuListItem title="Find device" />
            <MenuListItem title="Security update" />
            <MenuListItem title="Google Play Protect" />
          </MenuList>
        </div>
      </div>
    </Page>
  );
}
SecurityStatusPage.displayName = 'SecurityStatusPage';
SecurityStatusPage.icon = SecurityStatusIcon;
