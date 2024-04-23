import React from 'react';
import {
  Page,
  Navbar,
  NavbarBackLink,
  BlockHeader,
  BlockTitle,
  List,
  ListItem,
} from 'konsta/react';
import {
  MdLocationOn,
  MdOutlineContacts,
  MdWifiCalling3,
} from 'react-icons/md';
import { TbMicrophone } from 'react-icons/tb';

import { PrivacyProtectionIcon } from '../components/Icons';

export default function PrivacyProtectionPage() {
  return (
    <Page>
      <Navbar
        title="Privacy & protection"
        left={<NavbarBackLink onClick={() => history.back()} />}
      />
      <div className="flex-col items-start mt-3 pl-2">
        <BlockTitle>Sensitive actions</BlockTitle>
        <BlockHeader className=" opacity-50">
          Manage apps that request sensitive permissions
        </BlockHeader>

        <List dividers={false}>
          <ListItem label title="Location" media={<MdLocationOn />} />
          <ListItem label title="Contacts" media={<MdOutlineContacts />} />
          <ListItem label title="Call logs" media={<MdWifiCalling3 />} />
          <ListItem label title="Microphone" media={<TbMicrophone />} />
        </List>
      </div>
    </Page>
  );
}
PrivacyProtectionPage.displayName = 'PrivacyProtectionPage';
PrivacyProtectionPage.icon = PrivacyProtectionIcon;
