import React from 'react';
import { Page, Navbar, NavbarBackLink, List, ListItem } from 'konsta/react';
import { SpecialFeaturesIcon } from '../components/Icons';

export default function SpecialFeaturesPage() {
  return (
    <Page>
      <Navbar
        title="Special features"
        left={<NavbarBackLink onClick={() => history.back()} />}
      />{' '}
      <div className="flex-col items-start mt-3 pl-2">
        <List dividers={false}>
          <ListItem label title="Game Turbo" />
          <ListItem label title="Video toolbox" />
          <ListItem label title="Quick replies" />
          <ListItem label title="Second space" />
          <ListItem label title="Lite mode" />
        </List>
      </div>
    </Page>
  );
}
SpecialFeaturesPage.displayName = 'SpecialFeaturesPage';
SpecialFeaturesPage.icon = SpecialFeaturesIcon;
