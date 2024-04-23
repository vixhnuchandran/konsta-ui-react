import React from 'react';
import { Page, Navbar, NavbarBackLink, Preloader } from 'konsta/react';
import { Plus } from 'framework7-icons/react';
import { MdAdd } from 'react-icons/md';
import { WallpaperIcon } from '../components/Icons';

export default function WallpaperPage() {
  return (
    <Page>
      <Navbar
        title="Wallpaper"
        left={<NavbarBackLink onClick={() => history.back()} />}
      />
      <div className="flex-col items-start mt-3 pl-2">
        <div className="flex flex-col items-center justify-center h-[650px] font-light text-4xl mb-6">
          <Preloader />
        </div>
      </div>
    </Page>
  );
}

WallpaperPage.displayName = 'WallpaperPage';
WallpaperPage.icon = WallpaperIcon;
