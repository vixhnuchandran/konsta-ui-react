import React from 'react';
import { Page, Navbar, NavbarBackLink, Card } from 'konsta/react';
import { SimCardsMobileNetworksIcon } from '../components/Icons';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { RiDualSim1Fill, RiDualSim2Fill } from 'react-icons/ri';

export default function SimCardsMobileNetworksPage() {
  return (
    <Page>
      <Navbar
        title="SIM cards & mobile networks"
        left={<NavbarBackLink onClick={() => history.back()} />}
      />
      <div className="flex flex-wrap w-full">
        <div className="flex-1">
          <div className="flex flex-col md:flex-row lg:flex-col">
            <Card>
              <RiDualSim1Fill size={24} className=" opacity-25 my-2" />
              <span className="font-medium text-xl">No SIM card</span> <br />
              <div className="flex flex-wrap items-center">
                <span>Not set</span>
                <MdOutlineKeyboardArrowRight />
              </div>
            </Card>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex flex-col md:flex-row lg:flex-col">
            <Card>
              <RiDualSim2Fill size={24} className=" opacity-25 my-2" />
              <span className="font-medium text-xl">No SIM card</span> <br />
              <div className="flex flex-wrap items-center">
                <span>Not set</span>
                <MdOutlineKeyboardArrowRight />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Page>
  );
}
SimCardsMobileNetworksPage.displayName = 'SimCardsMobileNetworksPage';
SimCardsMobileNetworksPage.icon = SimCardsMobileNetworksIcon;
