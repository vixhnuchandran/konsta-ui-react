import React, { useState, useEffect } from 'react';
import { CgHomeScreen } from 'react-icons/cg';
import { MdScreenLockPortrait } from 'react-icons/md';
import { HiMiniDevicePhoneMobile } from 'react-icons/hi2';
import {
  Page,
  Navbar,
  NavbarBackLink,
  Chip,
  Preloader,
  List,
  ListItem,
} from 'konsta/react';
import { NotificationIcon } from '../components/Icons';

export default function NotificationPage() {
  return (
    <Page>
      <Navbar
        title="Notification"
        left={<NavbarBackLink onClick={() => history.back()} />}
      />
      <div className="flex-col mt-3 pl-2 ">
        <div className="flex p-0  justify-between">
          <div className="h-32 w-32 flex flex-col items-center space-y-2">
            <MdScreenLockPortrait size={104} />
            <Chip className="m-0.5 text-sky-600 bg-sky-400 ">Lock screen</Chip>
          </div>
          <div>
            <div className="h-32 w-32 flex flex-col items-center space-y-2">
              <HiMiniDevicePhoneMobile size={104} />
              <Chip className="m-0.5 text-sky-600 bg-sky-400">Floating</Chip>
            </div>
          </div>
          <div>
            <div className="h-32 w-32 flex flex-col items-center space-y-2">
              <CgHomeScreen size={104} />
              <Chip className="m-0.5 text-sky-600 bg-sky-400">Badges</Chip>
            </div>
          </div>
        </div>
        <List dividers={false}>
          <ListItem label title="Notification shade" />
          <hr className=" border-t border-gray-200 mt-4 mr-2" />
        </List>

        <div className="flex items-center justify-center h-full">
          <div className="flex flex-col items-center">
            <div className="font-light text-4xl mb-6">
              <Preloader />
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}

NotificationPage.displayName = 'NotificationPage';
NotificationPage.icon = NotificationIcon;
