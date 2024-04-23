import React from 'react';
import { Page, Navbar, NavbarBackLink } from 'konsta/react';
import { ServicesFeedbackIcon } from '../components/Icons';

export default function ServicesFeedbackPage() {
  return (
    <Page>
      <Navbar
        title="Feedback"
        left={<NavbarBackLink onClick={() => history.back()} />}
      />
    </Page>
  );
}
ServicesFeedbackPage.displayName = 'ServicesFeedbackPage';
ServicesFeedbackPage.icon = ServicesFeedbackIcon;
