import React from 'react';
import { Page, Navbar, NavbarBackLink } from 'konsta/react';

import { BsExclamationSquare } from 'react-icons/bs';
import { MdPerson, MdEmail, MdToday, MdFileUpload } from 'react-icons/md';
import DemoIcon from '../components/DemoIcon';
import { SystemAppsUpdaterIcon } from '../components/Icons';

export default function SystemAppsUpdaterPage() {
  return (
    <Page>
      <Navbar
        title="System apps updater"
        left={<NavbarBackLink onClick={() => history.back()} />}
      />
      <div className="flex-col">
        <div className="flex flex-col items-center mt-20">
          <BsExclamationSquare size={34} className=" opacity-25" />
          <h3 className=" text-base">All system apps are up to date</h3>
        </div>
      </div>
    </Page>
  );
}
SystemAppsUpdaterPage.displayName = 'SystemAppsUpdaterPage';
SystemAppsUpdaterPage.icon = SystemAppsUpdaterIcon;
