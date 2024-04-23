import React, { useRef, useState } from 'react';
import { Page, Navbar, NavbarBackLink } from 'konsta/react';
import { DigitalWellbeingParentalControlsIcon } from '../components/Icons';

export default function DigitalWellbeingParentalControlsPage() {
  return (
    <Page>
      <Navbar
        title="Digital Wellbeing Parental Controls"
        left={<NavbarBackLink onClick={() => history.back()} />}
      />
    </Page>
  );
}
DigitalWellbeingParentalControlsPage.displayName =
  'DigitalWellbeingParentalControlsPage';
DigitalWellbeingParentalControlsPage.icon =
  DigitalWellbeingParentalControlsIcon;
