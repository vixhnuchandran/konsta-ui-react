import React, { useState } from 'react';
import { Page, Navbar, NavbarBackLink, List, ListItem } from 'konsta/react';
import { AdditionalSettingsIcon } from '../components/Icons';

export default function AdditionalSettingsPage() {
  const [size, setSize] = useState('Default');
  const [isTransparent, setIsTransparent] = useState(false);
  return (
    <Page>
      <Navbar
        title="Additional settings"
        className="top-0 sticky"
        medium={size === 'Medium'}
        large={size === 'Large'}
        transparent={isTransparent}
        left={<NavbarBackLink onClick={() => history.back()} />}
      />
      <div className="flex-col items-start mt-3 pl-2">
        <List dividers={false}>
          <ListItem label title="Date & time" />
          <ListItem label title="Language $ input" />
          <ListItem label title="Region" />

          <ListItem label title="Full screen display" />
          <ListItem label title="Button shortcuts" />
          <ListItem label title="Notification light" />
          <ListItem label title="Quick ball" />
          <ListItem label title="One-handed mode" />
          <ListItem label title="Accessibility" />

          <ListItem label title="Enterprise mode" />
          <ListItem label title="Developer options" />
        </List>
      </div>
    </Page>
  );
}
AdditionalSettingsPage.displayName = 'AdditionalSettingsPage';
AdditionalSettingsPage.icon = AdditionalSettingsIcon;
