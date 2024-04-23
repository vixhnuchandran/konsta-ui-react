import React from 'react';
import { useState } from 'react';

import {
  Page,
  Navbar,
  NavbarBackLink,
  List,
  ListItem,
  Toggle,
  Range,
} from 'konsta/react';
import { DisplayIcon } from '../components/Icons';

export default function DisplayPage() {
  const [checked1, setChecked1] = useState(false);
  const [volume1, setVolume1] = useState(50);
  const [size, setSize] = useState(40);
  return (
    <Page>
      <Navbar
        title="Display"
        left={<NavbarBackLink onClick={() => history.back()} />}
      />

      <div className="flex-col mt-3 pl-2">
        <List dividers={false}>
          <ListItem
            title={'Brightness'}
            innerClassName="flex space-x-4 rtl:space-x-reverse"
            innerChildren={
              <>
                <Range
                  value={volume1}
                  step={1}
                  min={0}
                  max={100}
                  onChange={(e) => setVolume1(e.target.value)}
                />
              </>
            }
          />
          <ListItem label title="Reading mode" />
          <ListItem label title="Colour scheme" />

          <ListItem label title="Dark mode" />

          <ListItem label title="System font" />
          <ListItem
            label
            title={'Textsize'}
            innerClassName="flex  space-x-4 rtl:space-x-reverse"
            innerChildren={
              <>
                <Range
                  value={size}
                  step={20}
                  onChange={(e) => setSize(e.target.value)}
                />
              </>
            }
          />

          <ListItem label title="Control centre & Notification shade" />
          <ListItem label title="Fullscreen mode" />
          <ListItem
            label
            title="Auto-rotate screen"
            after={
              <Toggle
                component="div"
                className="-my-1"
                checked={checked1}
                onChange={() => setChecked1(!checked1)}
              />
            }
          />
        </List>
      </div>
    </Page>
  );
}
DisplayPage.displayName = 'DisplayPage';
DisplayPage.icon = DisplayIcon;
