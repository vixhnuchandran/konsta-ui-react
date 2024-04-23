import React, { useState } from 'react';
import {
  Page,
  Navbar,
  NavbarBackLink,
  Card,
  MenuList,
  MenuListItem,
} from 'konsta/react';
import { AboutPhoneIcon } from '../components/Icons';

export default function AboutPhonePage() {
  const [selected, setSelected] = useState('MIUIVersion');
  return (
    <Page>
      <Navbar
        title="About phone"
        left={<NavbarBackLink onClick={() => history.back()} />}
      />
      <div className="flex-col mt-3 pl-2">
        <div className="flex  h-full ">
          <div className="flex-1 h-full">
            <Card>
              <img
                src="/miui.svg"
                alt=""
                className="flex justify-center items-center  mt-7 mb-8 "
              />
              <span className="font-bold text-lg ">MIUI version </span>
              <br />
              MIUI Global
              <br />
              12.0.1
              <br />
              stable
            </Card>
          </div>

          <div className="flex-1 flex flex-col">
            <div className="flex-1 ">
              <Card header="Device name">Redmi Note 6 pro</Card>
            </div>

            <div className="flex-1 ">
              <Card header="Storage">
                <span className=" font-bold text-3xl ">23.6GB</span>
                <span>/64GB</span>
              </Card>
            </div>
          </div>
        </div>

        <MenuList>
          <MenuListItem
            title="MIUI version"
            active={selected === 'MIUIVersion'}
            onClick={() => setSelected('MIUIVersion')}
          />
          <MenuListItem
            title="Andriod version"
            active={selected === 'AndriodVersion'}
            onClick={() => setSelected('AndriodVersion')}
          />
          <MenuListItem
            title="Andriod security patch level"
            active={selected === 'AndriodSecurityPatchLevel'}
            onClick={() => setSelected('AndriodSecurityPatchLevel')}
          />
          <MenuListItem
            title="All specs"
            active={selected === 'AllSpecs'}
            onClick={() => setSelected('AllSpecs')}
          />

          <MenuListItem
            title="Back up and restore"
            active={selected === 'BackupAndRestore'}
            onClick={() => setSelected('BackupAndRestore')}
          />
          <MenuListItem
            title="Factory reset"
            active={selected === 'FactoryReset'}
            onClick={() => setSelected('FactoryReset')}
          />

          <MenuListItem
            title="Legal information"
            active={selected === 'LegalInformation'}
            onClick={() => setSelected('home')}
          />
          <MenuListItem
            title="Important safety information"
            active={selected === 'ImportantSafetyInformation'}
            onClick={() => setSelected('ImportantSafetyInformation')}
          />
          <MenuListItem
            title="Verification"
            active={selected === 'Verification'}
            onClick={() => setSelected('Verification')}
          />
        </MenuList>
      </div>
    </Page>
  );
}
AboutPhonePage.displayName = 'AboutPhonePage';
AboutPhonePage.icon = AboutPhoneIcon;
