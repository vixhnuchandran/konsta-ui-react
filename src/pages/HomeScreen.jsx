import React, { useState } from 'react';
import {
  Page,
  Navbar,
  NavbarBackLink,
  List,
  ListItem,
  Toggle,
} from 'konsta/react';
import { HomeScreenIcon } from '../components/Icons';

export default function HomeScreenPage() {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);
  const [checked6, setChecked6] = useState(false);
  return (
    <Page>
      <Navbar
        title="Dialog"
        left={<NavbarBackLink onClick={() => history.back()} />}
      />
      <div className="flex-col">
        <List dividers={false}>
          <ListItem label title="Default launcher" />
          <ListItem label title="Home screen" />

          <ListItem
            label
            title="App vault"
            after={
              <Toggle
                component="div"
                className="-my-1"
                checked={checked1}
                onChange={() => setChecked1(!checked1)}
              />
            }
          />
          <hr className=" border-t border-gray-100 mr-2" />

          <ListItem
            label
            title="Fill cells of uninstalled apps"
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
            title="Lock Home screen layout"
            after={
              <Toggle
                component="div"
                className="-my-1 k-color-brand-green"
                checked={checked3}
                onChange={() => setChecked3(!checked3)}
              />
            }
          />

          <ListItem label title="Icon size" />
          <ListItem label title="Home screen layout" />

          <ListItem
            label
            title="Global icon animations"
            after={
              <Toggle
                component="div"
                className="-my-1 k-color-brand-yellow"
                checked={checked4}
                onChange={() => setChecked4(!checked4)}
              />
            }
          />

          <hr className=" border-t border-gray-100 mr-2" />

          <ListItem
            label
            title="Show memory status"
            after={
              <Toggle
                component="div"
                className="-my-1 k-color-brand-yellow"
                checked={checked5}
                onChange={() => setChecked5(!checked5)}
              />
            }
          />
          <ListItem label title="Blur app previews" />

          <ListItem
            label
            title="Show suggestions"
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
HomeScreenPage.displayName = 'HomeScreenPage';
HomeScreenPage.icon = HomeScreenIcon;
