import React from 'react';
import {
  Page,
  Navbar,
  NavbarBackLink,
  Card,
  List,
  ListItem,
} from 'konsta/react';
import { PiLockSimpleBold, PiBluetoothThin } from 'react-icons/pi';
import { IoFingerPrintSharp } from 'react-icons/io5';
import { CiFaceSmile } from 'react-icons/ci';
import { PasswordsSecurityIcon } from '../components/Icons';

export default function PasswordsSecurityPage() {
  return (
    <Page>
      <Navbar
        title="Passwords & security"
        left={<NavbarBackLink onClick={() => history.back()} />}
      />

      <div className="flex-col">
        <div className="grid grid-cols-2 gap-0  ">
          <div className="flex flex-col ">
            <div className="flex-1">
              <Card>
                <PiLockSimpleBold size={34} className="text-green-400 my-3" />
                <span className=" font-medium text-xl ">Password</span> <br />
                <span>off</span>
              </Card>
            </div>
            <div className="flex-1">
              <Card>
                <CiFaceSmile size={34} className="text-orange-300 my-3" />
                <span className=" font-medium text-xl ">Face unlock</span>{' '}
                <br />
                <span>off</span>
              </Card>
            </div>
          </div>

          <div className="flex flex-col  lg:flex-col">
            <Card>
              <IoFingerPrintSharp size={34} className="text-purple-500 my-3" />
              <span className=" font-medium text-xl ">Fingerprint ..</span>{' '}
              <br />
              <span>off</span>
            </Card>
            <Card>
              <PiBluetoothThin size={34} className="text-indigo-500 my-3" />
              <span className=" font-medium text-xl ">Unlock with B.</span>{' '}
              <br />
              <span>off</span>
            </Card>
          </div>
        </div>
        <List dividers={false}>
          <ListItem
            label
            className="text-[10px]"
            groupTitle
            title="OTHER PASSWORDS"
          />
          <ListItem label title="Privacy protection password" />

          <ListItem label title="Emergency alerts" />
          <ListItem label title="Emergency SOS" />
          <ListItem label title="Privacy" />

          <ListItem label title="Authorisation & revocation" />
        </List>
      </div>
    </Page>
  );
}
PasswordsSecurityPage.displayName = 'PasswordsSecurityPage';
PasswordsSecurityPage.icon = PasswordsSecurityIcon;
