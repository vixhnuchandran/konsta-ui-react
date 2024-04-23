import React, { useState } from 'react';
import { Page, Navbar, NavbarBackLink } from 'konsta/react';
import { GoogleIcon } from '../components/Icons';

export default function GooglePage() {
  return (
    <Page>
      <Navbar
        title="Google"
        left={<NavbarBackLink onClick={() => history.back()} />}
      />
    </Page>
  );
}
GooglePage.displayName = 'GooglePage';
GooglePage.icon = GoogleIcon;
