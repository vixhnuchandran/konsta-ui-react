import React from "react"

import { Page, Navbar, Panel, Link, MenuList, MenuListItem } from "konsta/react"
import { MenuItem } from "../types"
import { AiFillQuestionCircle } from "react-icons/ai"
import { FaBrush, FaUserAlt } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { GiFizzingFlask } from "react-icons/gi"
import { HiLockClosed } from "react-icons/hi"
import { ImArrowUp } from "react-icons/im"
import { MdOutlinePhoneAndroid, MdCastConnected } from "react-icons/md"
import { PiSpeakerLowFill, PiDotsThreeCircleFill } from "react-icons/pi"
import {
  RiShieldCheckFill,
  RiSimCard2Fill,
  RiWifiFill,
  RiBluetoothFill,
  RiSunFill,
  RiNotificationBadgeFill,
  RiHome7Fill,
  RiFlowerFill,
  RiFingerprint2Fill,
  RiShieldKeyholeFill,
  RiBatteryFill,
  RiSettings2Fill,
  RiUserHeartFill,
} from "react-icons/ri"
import { BsArrowLeft } from "react-icons/bs"
import SystemAppsUpdaterPanel from "./SidePanels/SystemAppsUpdaterPanel"
import SecurityStatusPanel from "./SidePanels/SecurityStatusPanel"
import AccountSyncPanel from "./SidePanels/AccountSyncPanel"
import AdditionalSettingsPanel from "./SidePanels/AdditionalSettingsPanel"
import AppsPanel from "./SidePanels/AppsPanel"
import BatteryPerformancePanel from "./SidePanels/BatteryPerformancePanel"
import BluetoothPanel from "./SidePanels/BluetoothPanel"
import ConnectionSharingPanel from "./SidePanels/ConnectionSharingPanel"
import DigitalWellbeingParentalControlsPanel from "./SidePanels/DigitalWellbeingParentalControlsPanel"
import DisplayPanel from "./SidePanels/DisplayPanel"
import GooglePanel from "./SidePanels/GooglePanel"
import HomeScreenPanel from "./SidePanels/HomeScreenPanel"
import LockScreenPanel from "./SidePanels/LockScreenPanel"
import NotificationPanel from "./SidePanels/NotificationPanel"
import PasswordsSecurityPanel from "./SidePanels/PasswordsSecurityPanel"
import PrivacyProtectionPanel from "./SidePanels/PrivacyProtectionPanel"
import ServicesFeedbackPanel from "./SidePanels/ServicesFeedbackPanel"
import SimCardsMobileNetworksPanel from "./SidePanels/SimCardsMobileNetworksPanel"
import SoundVibrationPanel from "./SidePanels/SoundVibrationPanel"
import SpecialFeaturesPanel from "./SidePanels/SpecialFeaturesPanel"
import ThemesPanel from "./SidePanels/ThemesPanel"
import WallpaperPanel from "./SidePanels/WallpaperPanel"
import WiFiPanel from "./SidePanels/WiFiPanel"
import AboutPhonePanel from "./SidePanels/AboutPhonePanel"

const PanelComponents: { [key: string]: React.FC } = {
  AboutPhone: AboutPhonePanel,
  SystemAppsUpdater: SystemAppsUpdaterPanel,
  SecurityStatus: SecurityStatusPanel,
  SimCardsMobileNetworks: SimCardsMobileNetworksPanel,
  WiFi: WiFiPanel,
  Bluetooth: BluetoothPanel,
  ConnectionSharing: ConnectionSharingPanel,
  LockScreen: LockScreenPanel,
  Display: DisplayPanel,
  SoundVibration: SoundVibrationPanel,
  Notification: NotificationPanel,
  HomeScreen: HomeScreenPanel,
  Wallpaper: WallpaperPanel,
  Themes: ThemesPanel,
  PasswordsSecurity: PasswordsSecurityPanel,
  PrivacyProtection: PrivacyProtectionPanel,
  BatteryPerformance: BatteryPerformancePanel,
  Apps: AppsPanel,
  AdditionalSettings: AdditionalSettingsPanel,
  DigitalWellbeingParentalControls: DigitalWellbeingParentalControlsPanel,
  SpecialFeatures: SpecialFeaturesPanel,
  Google: GooglePanel,
  AccountSync: AccountSyncPanel,
  ServicesFeedback: ServicesFeedbackPanel,
}

interface MenuListCompProps {
  openMenuItem: string | null
  handleMenuItemClick: (menuItem: MenuItem | null) => void
}

const MenuListComp: React.FC<MenuListCompProps> = ({
  openMenuItem,
  handleMenuItemClick,
}) => {
  return (
    <div>
      <MenuList className="text-xl mt-4 text-black ">
        <div className="space-y-2">
          <MenuListItem
            title="About phone "
            onClick={() => handleMenuItemClick("AboutPhone")}
            media={<MdOutlinePhoneAndroid className="text-sky-500 mr-2" />}
          />

          <MenuListItem
            title="System apps updater"
            onClick={() => handleMenuItemClick("SystemAppsUpdater")}
            media={<ImArrowUp className=" text-orange-500 mr-2" />}
          />

          <MenuListItem
            title="Security status"
            onClick={() => handleMenuItemClick("SecurityStatus")}
            media={<RiShieldCheckFill className=" text-green-500 mr-2" />}
          />

          <hr className=" border-t border-gray-100 mr-2" />

          <MenuListItem
            title="SIM cards & mobile networks"
            onClick={() => handleMenuItemClick("SimCardsMobileNetworks")}
            media={<RiSimCard2Fill className=" text-yellow-500 mr-2" />}
          />
          <MenuListItem
            title="Wi-Fi"
            onClick={() => handleMenuItemClick("WiFi")}
            media={<RiWifiFill className="text-sky-500 mr-2" />}
          />
          <MenuListItem
            title="Bluetooth"
            onClick={() => handleMenuItemClick("Bluetooth")}
            media={<RiBluetoothFill className="text-sky-500 mr-2" />}
          />
          <MenuListItem
            title="Connection & sharing"
            onClick={() => handleMenuItemClick("ConnectionSharing")}
            media={<MdCastConnected className="text-red-400 mr-2" />}
          />

          <MenuListItem
            title="Lock screen"
            onClick={() => handleMenuItemClick("LockScreen")}
            media={<HiLockClosed className="text-orange-500 mr-2" />}
          />
          <MenuListItem
            title="Display"
            onClick={() => handleMenuItemClick("Display")}
            media={<RiSunFill className="text-yellow-400 mr-2" />}
          />
          <MenuListItem
            title="Sound & vibration"
            onClick={() => handleMenuItemClick("SoundVibration")}
            media={<PiSpeakerLowFill className="text-green-400 mr-2" />}
          />
          <MenuListItem
            title="Notification"
            onClick={() => handleMenuItemClick("Notification")}
            media={<RiNotificationBadgeFill className="text-sky-500 mr-2" />}
          />
          <MenuListItem
            title="Home screen"
            onClick={() => handleMenuItemClick("HomeScreen")}
            media={<RiHome7Fill className=" text-indigo-500 mr-2" />}
          />
          <MenuListItem
            title="Wallpaper"
            onClick={() => handleMenuItemClick("Wallpaper")}
            media={<RiFlowerFill className=" text-red-400 mr-2" />}
          />
          <MenuListItem
            title="Themes"
            onClick={() => handleMenuItemClick("Themes")}
            media={<FaBrush className="text-sky-400 mr-2" />}
          />

          <hr className=" border-t border-gray-100 mr-2" />

          <MenuListItem
            title="Passwords & security"
            onClick={() => handleMenuItemClick("PasswordsSecurity")}
            media={<RiFingerprint2Fill className="text-indigo-400 mr-2" />}
          />
          <MenuListItem
            title="Privacy protection"
            onClick={() => handleMenuItemClick("PrivacyProtection")}
            media={<RiShieldKeyholeFill className="text-sky-500 mr-2" />}
          />
          <MenuListItem
            title="Battery & performance"
            onClick={() => handleMenuItemClick("BatteryPerformance")}
            media={<RiBatteryFill className="text-green-400 mr-2" />}
          />

          <MenuListItem
            title="Apps"
            onClick={() => handleMenuItemClick("Apps")}
            media={<RiSettings2Fill className="text-sky-500 mr-2" />}
          />

          <MenuListItem
            title="Additional settings"
            onClick={() => handleMenuItemClick("AdditionalSettings")}
            media={<PiDotsThreeCircleFill className=" text-slate-400 mr-2" />}
          />

          <hr className=" border-t border-gray-100 mr-2" />

          <MenuListItem
            title="Digital Wellbeing & parental controls"
            onClick={() =>
              handleMenuItemClick("DigitalWellbeingParentalControls")
            }
            media={<RiUserHeartFill className="text-green-400 mr-2" />}
          />
          <MenuListItem
            title="Special features"
            onClick={() => handleMenuItemClick("SpecialFeatures")}
            media={<GiFizzingFlask className="text-indigo-500 mr-2" />}
          />

          <hr className=" border-t border-gray-100 mr-2" />

          <MenuListItem
            title="Google"
            onClick={() => handleMenuItemClick("Google")}
            media={<FcGoogle className=" mr-2" />}
          />
          <MenuListItem
            title="Account & sync"
            onClick={() => handleMenuItemClick("AccountSync")}
            media={<FaUserAlt className="text-sky-400 mr-2" />}
          />

          <hr className=" border-t border-gray-100 mr-2" />

          <MenuListItem
            title="Services & feedback"
            onClick={() => handleMenuItemClick("ServicesFeedback")}
            media={<AiFillQuestionCircle className="text-blue-500 mr-2" />}
          />
        </div>
      </MenuList>

      {openMenuItem && PanelComponents[openMenuItem] && (
        <Panel
          backdrop={true}
          side="right"
          size="w-screen h-screen"
          opened={true}
          onBackdropClick={() => handleMenuItemClick(null)}
        >
          <Page>
            <Navbar
              left={
                <Link navbar onClick={() => handleMenuItemClick(null)}>
                  <BsArrowLeft className="text-black text-2xl ml-4  " />
                </Link>
              }
            />
            <div className="pl-4 text-xs ">
              {React.createElement(PanelComponents[openMenuItem])}
            </div>
          </Page>
        </Panel>
      )}
    </div>
  )
}

export default MenuListComp
