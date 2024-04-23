import React from 'react';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { FaBrush, FaUserAlt } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { GiFizzingFlask } from 'react-icons/gi';
import { HiLockClosed } from 'react-icons/hi';
import { ImArrowUp } from 'react-icons/im';
import { MdOutlinePhoneAndroid, MdCastConnected } from 'react-icons/md';
import {
  PiSpeakerLowFill,
  PiDotsThreeCircleFill,
  PiFlowerTulipFill,
} from 'react-icons/pi';
import {
  RiShieldCheckFill,
  RiSimCard2Fill,
  RiWifiFill,
  RiBluetoothFill,
  RiSunFill,
  RiNotificationBadgeFill,
  RiHome7Fill,
  RiFingerprint2Fill,
  RiShieldKeyholeFill,
  RiBatteryFill,
  RiSettings2Fill,
  RiUserHeartFill,
} from 'react-icons/ri';

const AboutPhoneIcon = (
  <MdOutlinePhoneAndroid className="ios:w-7 material:w-6 text-sky-500" />
);
const SystemAppsUpdaterIcon = (
  <ImArrowUp className="ios:w-7 material:w-6 text-orange-500" />
);
const SecurityStatusIcon = (
  <RiShieldCheckFill className="ios:w-7 material:w-6 text-green-500" />
);

const SimCardsMobileNetworksIcon = (
  <RiSimCard2Fill className="ios:w-7 material:w-6 text-yellow-500" />
);
const WifiIcon = <RiWifiFill className="ios:w-7 material:w-6 text-sky-500" />;
const BluetoothIcon = (
  <RiBluetoothFill className="ios:w-7 material:w-6 text-sky-500" />
);
const ConnectionSharingIcon = (
  <MdCastConnected className="ios:w-7 material:w-6 text-red-400" />
);

const LockScreenIcon = (
  <HiLockClosed className="ios:w-7 material:w-6 text-orange-500" />
);
const DisplayIcon = (
  <RiSunFill className="ios:w-7 material:w-6 text-yellow-400" />
);
const SoundVibrationIcon = (
  <PiSpeakerLowFill className="ios:w-7 material:w-6 text-green-400" />
);
const NotificationIcon = (
  <RiNotificationBadgeFill className="ios:w-7 material:w-6 text-sky-500" />
);
const HomeScreenIcon = (
  <RiHome7Fill className="ios:w-7 material:w-6 text-indigo-500" />
);
const WallpaperIcon = (
  <PiFlowerTulipFill className="ios:w-7 material:w-6 text-red-400" />
);
const ThemesIcon = <FaBrush className="ios:w-7 material:w-6 text-sky-400" />;

const PasswordsSecurityIcon = (
  <RiFingerprint2Fill className="ios:w-7 material:w-6 text-indigo-400" />
);
const PrivacyProtectionIcon = (
  <RiShieldKeyholeFill className="ios:w-7 material:w-6 text-sky-500" />
);
const BatteryPerformanceIcon = (
  <RiBatteryFill className="ios:w-7 material:w-6 text-green-400" />
);
const AppsIcon = (
  <RiSettings2Fill className="ios:w-7 material:w-6 text-sky-500 " />
);
const AdditionalSettingsIcon = (
  <PiDotsThreeCircleFill className="ios:w-7 material:w-6 text-slate-400" />
);
const DigitalWellbeingParentalControlsIcon = (
  <RiUserHeartFill className="ios:w-7 material:w-6 text-green-400" />
);

const SpecialFeaturesIcon = (
  <GiFizzingFlask className="ios:w-7 material:w-6 text-indigo-500" />
);
const GoogleIcon = <FcGoogle className="ios:w-7 material:w-6" />;
const AccountSyncIcon = (
  <FaUserAlt className="ios:w-7 material:w-6 text-sky-400" />
);
const ServicesFeedbackIcon = (
  <AiFillQuestionCircle className="ios:w-7 material:w-6 text-blue-500 " />
);

export {
  ServicesFeedbackIcon,
  ThemesIcon,
  AccountSyncIcon,
  GoogleIcon,
  SpecialFeaturesIcon,
  LockScreenIcon,
  SystemAppsUpdaterIcon,
  AboutPhoneIcon,
  ConnectionSharingIcon,
  SoundVibrationIcon,
  AdditionalSettingsIcon,
  SecurityStatusIcon,
  SimCardsMobileNetworksIcon,
  WifiIcon,
  BluetoothIcon,
  DisplayIcon,
  NotificationIcon,
  HomeScreenIcon,
  WallpaperIcon,
  PasswordsSecurityIcon,
  PrivacyProtectionIcon,
  BatteryPerformanceIcon,
  AppsIcon,
  DigitalWellbeingParentalControlsIcon,
};
