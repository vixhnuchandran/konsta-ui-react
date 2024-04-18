import React from "react"
import SystemAppsUpdaterPanel from "./SystemAppsUpdaterPanel"
import SecurityStatusPanel from "./SecurityStatusPanel"
import AccountSyncPanel from "./AccountSyncPanel"
import AdditionalSettingsPanel from "./AdditionalSettingsPanel"
import AppsPanel from "./AppsPanel"
import BatteryPerformancePanel from "./BatteryPerformancePanel"
import BluetoothPanel from "./BluetoothPanel"
import ConnectionSharingPanel from "./ConnectionSharingPanel"
import DigitalWellbeingParentalControlsPanel from "./DigitalWellbeingParentalControlsPanel"
import DisplayPanel from "./DisplayPanel"
import GooglePanel from "./GooglePanel"
import HomeScreenPanel from "./HomeScreenPanel"
import LockScreenPanel from "./LockScreenPanel"
import NotificationPanel from "./NotificationPanel"
import PasswordsSecurityPanel from "./PasswordsSecurityPanel"
import PrivacyProtectionPanel from "./PrivacyProtectionPanel"
import ServicesFeedbackPanel from "./ServicesFeedbackPanel"
import SimCardsMobileNetworksPanel from "./SimCardsMobileNetworksPanel"
import SoundVibrationPanel from "./SoundVibrationPanel"
import SpecialFeaturesPanel from "./SpecialFeaturesPanel"
import ThemesPanel from "./ThemesPanel"
import WallpaperPanel from "./WallpaperPanel"
import WiFiPanel from "./WiFiPanel"
import AboutPhonePanel from "./AboutPhonePanel"

interface SidePanelCompProps {
  openMenuItem: string | null
}

const SidePanelComp: React.FC<SidePanelCompProps> = ({ openMenuItem }) => {
  switch (openMenuItem) {
    case "AboutPhone":
      return <AboutPhonePanel />
    case "SystemAppsUpdater":
      return <SystemAppsUpdaterPanel />
    case "SecurityStatus":
      return <SecurityStatusPanel />
    case "SimCardsMobileNetworks":
      return <SimCardsMobileNetworksPanel />
    case "WiFi":
      return <WiFiPanel />
    case "Bluetooth":
      return <BluetoothPanel />
    case "ConnectionSharing":
      return <ConnectionSharingPanel />
    case "LockScreen":
      return <LockScreenPanel />
    case "Display":
      return <DisplayPanel />
    case "SoundVibration":
      return <SoundVibrationPanel />
    case "Notification":
      return <NotificationPanel />
    case "HomeScreen":
      return <HomeScreenPanel />
    case "Wallpaper":
      return <WallpaperPanel />
    case "Themes":
      return <ThemesPanel />
    case "PasswordsSecurity":
      return <PasswordsSecurityPanel />
    case "PrivacyProtection":
      return <PrivacyProtectionPanel />
    case "BatteryPerformance":
      return <BatteryPerformancePanel />
    case "Apps":
      return <AppsPanel />
    case "AdditionalSettings":
      return <AdditionalSettingsPanel />
    case "DigitalWellbeingParentalControls":
      return <DigitalWellbeingParentalControlsPanel />
    case "SpecialFeatures":
      return <SpecialFeaturesPanel />
    case "Google":
      return <GooglePanel />
    case "AccountSync":
      return <AccountSyncPanel />
    case "ServicesFeedback":
      return <ServicesFeedbackPanel />
    default:
      return null
  }
}

export default SidePanelComp
