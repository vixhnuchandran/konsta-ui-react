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

import SidePanelComp from "./SidePanels"
import AboutPhonePanel from "./SidePanels/AboutPhonePanel"

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
            className=""
            title={<span className="text-lg">About phone </span>}
            onClick={() => handleMenuItemClick("AboutPhone")}
            media={<MdOutlinePhoneAndroid className="text-sky-500 mr-2" />}
          />

          <MenuListItem
            title={<span className="text-lg">System apps updater</span>}
            onClick={() => handleMenuItemClick("SystemAppsUpdater")}
            media={<ImArrowUp className=" text-orange-500 mr-2" />}
          />

          <MenuListItem
            title={<span className="text-lg">Security status</span>}
            onClick={() => handleMenuItemClick("SecurityStatus")}
            media={<RiShieldCheckFill className=" text-green-500 mr-2" />}
          />

          <hr className=" border-t border-gray-100 mr-2" />

          <MenuListItem
            title={<span className="text-lg">SIM cards & mobile networks</span>}
            onClick={() => handleMenuItemClick("SimCardsMobileNetworks")}
            media={<RiSimCard2Fill className=" text-yellow-500 mr-2" />}
          />
          <MenuListItem
            title={<span className="text-lg">Wi-Fi</span>}
            onClick={() => handleMenuItemClick("WiFi")}
            media={<RiWifiFill className="text-sky-500 mr-2" />}
          />
          <MenuListItem
            title={<span className="text-lg">Bluetooth</span>}
            onClick={() => handleMenuItemClick("Bluetooth")}
            media={<RiBluetoothFill className="text-sky-500 mr-2" />}
          />
          <MenuListItem
            title={<span className="text-lg">Connection & sharing</span>}
            onClick={() => handleMenuItemClick("ConnectionSharing")}
            media={<MdCastConnected className="text-red-400 mr-2" />}
          />

          <MenuListItem
            title={<span className="text-lg">Lock screen</span>}
            onClick={() => handleMenuItemClick("LockScreen")}
            media={<HiLockClosed className="text-orange-500 mr-2" />}
          />
          <MenuListItem
            title={<span className="text-lg">Display</span>}
            onClick={() => handleMenuItemClick("Display")}
            media={<RiSunFill className="text-yellow-400 mr-2" />}
          />
          <MenuListItem
            title={<span className="text-lg">Sound & vibration</span>}
            onClick={() => handleMenuItemClick("SoundVibration")}
            media={<PiSpeakerLowFill className="text-green-400 mr-2" />}
          />
          <MenuListItem
            title={<span className="text-lg">Notification</span>}
            onClick={() => handleMenuItemClick("Notification")}
            media={<RiNotificationBadgeFill className="text-sky-500 mr-2" />}
          />
          <MenuListItem
            title={<span className="text-lg">Home screen</span>}
            onClick={() => handleMenuItemClick("HomeScreen")}
            media={<RiHome7Fill className=" text-indigo-500 mr-2" />}
          />
          <MenuListItem
            title={<span className="text-lg">Wallpaper</span>}
            onClick={() => handleMenuItemClick("Wallpaper")}
            media={<RiFlowerFill className=" text-red-400 mr-2" />}
          />
          <MenuListItem
            title={<span className="text-lg">Themes</span>}
            onClick={() => handleMenuItemClick("Themes")}
            media={<FaBrush className="text-sky-400 mr-2" />}
          />

          <hr className=" border-t border-gray-100 mr-2" />

          <MenuListItem
            title={<span className="text-lg">Passwords & security</span>}
            onClick={() => handleMenuItemClick("PasswordsSecurity")}
            media={<RiFingerprint2Fill className="text-indigo-400 mr-2" />}
          />
          <MenuListItem
            title={<span className="text-lg">Privacy protection</span>}
            onClick={() => handleMenuItemClick("PrivacyProtection")}
            media={<RiShieldKeyholeFill className="text-sky-500 mr-2" />}
          />
          <MenuListItem
            title={<span className="text-lg">Battery & performance</span>}
            onClick={() => handleMenuItemClick("BatteryPerformance")}
            media={<RiBatteryFill className="text-green-400 mr-2" />}
          />

          <MenuListItem
            title={<span className="text-lg">Apps</span>}
            onClick={() => handleMenuItemClick("Apps")}
            media={<RiSettings2Fill className="text-sky-500 mr-2" />}
          />

          <MenuListItem
            title={<span className="text-lg">Additional settings</span>}
            onClick={() => handleMenuItemClick("AdditionalSettings")}
            media={<PiDotsThreeCircleFill className=" text-slate-400 mr-2" />}
          />

          <hr className=" border-t border-gray-100 mr-2" />

          <MenuListItem
            title={
              <span className="text-lg">
                Digital Wellbeing & parental controls
              </span>
            }
            onClick={() =>
              handleMenuItemClick("DigitalWellbeingParentalControls")
            }
            media={<RiUserHeartFill className="text-green-400 mr-2" />}
          />
          <MenuListItem
            title={<span className="text-lg">Special features</span>}
            onClick={() => handleMenuItemClick("SpecialFeatures")}
            media={<GiFizzingFlask className="text-indigo-500 mr-2" />}
          />

          <hr className=" border-t border-gray-100 mr-2" />

          <MenuListItem
            title={<span className="text-lg">Google</span>}
            onClick={() => handleMenuItemClick("Google")}
            media={<FcGoogle className=" mr-2" />}
          />
          <MenuListItem
            title={<span className="text-lg">Account & sync</span>}
            onClick={() => handleMenuItemClick("AccountSync")}
            media={<FaUserAlt className="text-sky-400 mr-2" />}
          />

          <hr className=" border-t border-gray-100 mr-2" />

          <MenuListItem
            title={<span className="text-lg">Services & feedback</span>}
            onClick={() => handleMenuItemClick("ServicesFeedback")}
            media={<AiFillQuestionCircle className="text-blue-500 mr-2" />}
          />
        </div>
      </MenuList>

      {openMenuItem === "AboutPhone" && (
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
                  <BsArrowLeft className="text-black text-2xl ml-4" />
                </Link>
              }
            />
            <div className="pl-4 text-xs ">
              <AboutPhonePanel />
            </div>
          </Page>
        </Panel>
      )}

      <SidePanelComp openMenuItem={openMenuItem} />
    </div>
  )
}

export default MenuListComp
