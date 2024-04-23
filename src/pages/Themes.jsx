import React from 'react';
import { Page, Navbar, NavbarBackLink, Preloader } from 'konsta/react';

import { ThemesIcon } from '../components/Icons';

export default function ThemesPage() {
  return (
    <Page>
      <Navbar
        title="Themes"
        left={<NavbarBackLink onClick={() => history.back()} />}
      />{' '}
      <div className="flex-col items-start mt-3 pl-2">
        <div className="flex flex-col items-center justify-center h-[650px] font-light text-4xl mb-6">
          <Preloader />
        </div>
      </div>
    </Page>
  );
}
ThemesPage.displayName = 'ThemesPage';
ThemesPage.icon = ThemesIcon;
