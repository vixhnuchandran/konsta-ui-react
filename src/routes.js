import AboutPhone from './pages/AboutPhone.jsx';
import SystemAppsUpdater from './pages/SystemAppsUpdater.jsx';
import SecurityStatus from './pages/SecurityStatus.jsx';
import SimCardsMobileNetworks from './pages/SimCardsMobileNetworks.jsx';
import WiFi from './pages/WiFi.jsx';
import Bluetooth from './pages/Bluetooth.jsx';
import ConnectionSharing from './pages/ConnectionSharing.jsx';
import LockScreen from './pages/LockScreen.jsx';
import Display from './pages/Display.jsx';
import SoundVibration from './pages/SoundVibration.jsx';
import Notification from './pages/Notification.jsx';
import HomeScreen from './pages/HomeScreen.jsx';
import Wallpaper from './pages/Wallpaper.jsx';
import Themes from './pages/Themes.jsx';
import PasswordsSecurity from './pages/PasswordsSecurity.jsx';
import PrivacyProtection from './pages/PrivacyProtection.jsx';
import BatteryPerformance from './pages/BatteryPerformance.jsx';
import Apps from './pages/Apps.jsx';
import AdditionalSettings from './pages/AdditionalSettings.jsx';
import DigitalWellbeingParentalControls from './pages/DigitalWellbeingParentalControls.jsx';
import SpecialFeatures from './pages/SpecialFeatures.jsx';
import Google from './pages/Google.jsx';
import AccountSync from './pages/AccountSync.jsx';
import ServicesFeedback from './pages/ServicesFeedback.jsx';
import DemoIcon from './components/DemoIcon.jsx';

const routes = [
  AboutPhone,
  SystemAppsUpdater,
  SecurityStatus,
  SimCardsMobileNetworks,
  WiFi,
  Bluetooth,
  ConnectionSharing,
  LockScreen,
  Display,
  SoundVibration,
  Notification,
  HomeScreen,
  Wallpaper,
  Themes,
  PasswordsSecurity,
  PrivacyProtection,
  BatteryPerformance,
  Apps,
  AdditionalSettings,
  DigitalWellbeingParentalControls,
  SpecialFeatures,
  Google,
  AccountSync,
  ServicesFeedback,
].map((component) => {
  const name = component.displayName || component.name;
  const path = `/${name
    .split('Page')[0]
    .split('')
    .map((char, index) =>
      char.match(/[A-Z]/) && index !== 0 ? `-${char}` : char
    )
    .join('')
    .toLowerCase()}`;

  const icon = component.icon || DemoIcon;
  const title =
    component.title ||
    name
      .split('Page')[0]
      .split('')
      .map((char, index) =>
        char.match(/[A-Z]/) && index !== 0 ? ` ${char}` : char
      )
      .join('');
  return {
    component,
    path,
    title,
    icon,
  };
});
// routes.sort((a, b) => (a.title > b.title ? 1 : -1));

export default routes;
