import React from 'react';
import {
  Page,
  Navbar,
  List,
  ListItem,

} from 'konsta/react';
import { Link as RouterLink } from 'react-router-dom';
import routes from '../routes.js';
import DemoIcon from '../components/DemoIcon.jsx';

export default function HomePage() {

  return (
    <Page>
      <Navbar title="When Remote" medium transparent centerTitle />

      <List strong inset dividers={false}>
        {routes.map((route) => (
          <ListItem
            key={route.path}
            link
            title={route.title}
            linkComponent={RouterLink}
            linkProps={{ to: route.path }}
            media={route.icon || <DemoIcon />}
          />
        ))}
      </List>
    </Page>
  );
}
HomePage.displayName = 'HomePage';
