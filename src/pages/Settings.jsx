import React, { useLayoutEffect, useState, useEffect } from 'react';
import {
  Page,
  Navbar,
  BlockTitle,
  NavbarBackLink,
  List,
  ListItem,
  Radio,
  Toggle,
  Link,
  Popover,
} from 'konsta/react';

import {  SettingsIcon } from '../components/Icons.jsx';

export default function SettingsPage() {

    const [theme, setTheme] = useState('ios');
    const [currentColorTheme, setCurrentColorTheme] = useState('');
    const setColorTheme = (color) => {
      const htmlEl = document.documentElement;
      htmlEl.classList.forEach((c) => {
        if (c.includes('k-color')) htmlEl.classList.remove(c);
      });
      if (color) htmlEl.classList.add(color);
      setCurrentColorTheme(color);
    };
    useEffect(() => {
      window.setTheme = (t) => setTheme(t);
      window.setMode = (mode) => {
        if (mode === 'dark') document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');
      };
    }, []);
    const inIFrame = window.parent !== window;
    useLayoutEffect(() => {
      if (window.location.href.includes('safe-areas')) {
        const html = document.documentElement;
        if (html) {
          html.style.setProperty(
            '--k-safe-area-top',
            theme === 'ios' ? '44px' : '24px'
          );
          html.style.setProperty('--k-safe-area-bottom', '34px');
        }
      }
    }, [theme]);


  const [darkMode, setDarkMode] = useState(false);
  const [colorPickerOpened, setColorPickerOpened] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  useLayoutEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      '(prefers-color-scheme: dark)'
    );

    const updateDarkMode = (e) => {
      setDarkMode(e.matches);
      if (e.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    const handleChange = (e) => {
      if (e.matches) {
        setDarkMode(true);
        document.documentElement.classList.add('dark');
      } else {
        setDarkMode(false);
        document.documentElement.classList.remove('dark');
      }
    };

    updateDarkMode(darkModeMediaQuery);

    darkModeMediaQuery.addEventListener('change', handleChange);

    return () => {
      darkModeMediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <Page>
              <Navbar
        title="Settings"
        left={<NavbarBackLink onClick={() => history.back()} />}
      />
      <BlockTitle>Theme</BlockTitle>

      <List strong inset>
        <ListItem
          title="Dark Mode"
          label
          after={
            <Toggle
              component="div"
              onChange={() => toggleDarkMode()}
              checked={darkMode}
            />
          }
        />
        <ListItem
          title="Color Theme"
          link
          onClick={() => setColorPickerOpened(true)}
          after={
            <div className="w-6 h-6 rounded-full bg-primary home-color-picker" />
          }
        />
      </List>
      <Popover
        opened={colorPickerOpened}
        onBackdropClick={() => setColorPickerOpened(false)}
        size="w-36"
        target=".home-color-picker"
      >
        <div className="grid grid-cols-3 py-2">
          <Link
            touchRipple
            className="overflow-hidden h-12"
            onClick={() => setColorTheme('')}
          >
            <span className="bg-brand-primary w-6 h-6 rounded-full" />
          </Link>
          <Link
            touchRipple
            className="overflow-hidden h-12"
            onClick={() => setColorTheme('k-color-brand-red')}
          >
            <span className="bg-brand-red w-6 h-6 rounded-full" />
          </Link>
          <Link
            touchRipple
            className="overflow-hidden h-12"
            onClick={() => setColorTheme('k-color-brand-green')}
          >
            <span className="bg-brand-green w-6 h-6 rounded-full" />
          </Link>
          <Link
            touchRipple
            className="overflow-hidden h-12"
            onClick={() => setColorTheme('k-color-brand-yellow')}
          >
            <span className="bg-brand-yellow w-6 h-6 rounded-full" />
          </Link>
          <Link
            touchRipple
            className="overflow-hidden h-12"
            onClick={() => setColorTheme('k-color-brand-purple')}
          >
            <span className="bg-brand-purple w-6 h-6 rounded-full" />
          </Link>
        </div>
      </Popover>
    </Page>
  );
}
SettingsPage.displayName = 'SettingsPage';
SettingsPage.icon = SettingsIcon;