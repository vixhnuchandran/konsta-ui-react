import React from 'react';
import { useState } from 'react';

import {
  Page,
  Navbar,
  NavbarBackLink,
  List,
  ListItem,
  Toggle,
} from 'konsta/react';
import { LockScreenIcon } from '../components/Icons';

export default function LockScreenPage() {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);
  const [checked6, setChecked6] = useState(false);
  return (
    <Page>
      <Navbar
        title="Lock screen"
        left={<NavbarBackLink onClick={() => history.back()} />}
      />
      <div className="flex-col mt-3 pl-2">
        <List dividers={false}>
          <ListItem label title="Sleep" />
          <ListItem
            label
            title="Raise to wake"
            after={
              <Toggle
                component="div"
                className="-my-1"
                checked={checked1}
                onChange={() => setChecked1(!checked1)}
              />
            }
          />
          <ListItem
            label
            title="Double tap to wake or turn off screen"
            after={
              <Toggle
                component="div"
                className="-my-1 k-color-brand-red"
                checked={checked2}
                onChange={() => setChecked2(!checked2)}
              />
            }
          />
          <ListItem
            label
            title="Wake Lock screen for notifications"
            after={
              <Toggle
                component="div"
                className="-my-1 k-color-brand-green"
                checked={checked3}
                onChange={() => setChecked3(!checked3)}
              />
            }
          />
          <ListItem
            label
            title="Smart cover mode"
            after={
              <Toggle
                component="div"
                className="-my-1 k-color-brand-yellow"
                checked={checked4}
                onChange={() => setChecked4(!checked4)}
              />
            }
          />
          <ListItem label title="Glance for MI" />

          <ListItem label title="Lock screen clock format" />

          <ListItem
            label
            title="Launch Camera"
            after={
              <Toggle
                component="div"
                className="-my-1 k-color-brand-yellow"
                checked={checked5}
                onChange={() => setChecked5(!checked5)}
              />
            }
          />
          <ListItem
            label
            title="Pocket mode"
            after={
              <Toggle
                component="div"
                className="-my-1 k-color-brand-yellow"
                checked={checked6}
                onChange={() => setChecked6(!checked6)}
              />
            }
          />
        </List>
      </div>
    </Page>
  );
}
LockScreenPage.displayName = 'LockScreenPage';
LockScreenPage.icon = LockScreenIcon;
