import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import Logo from './Logo';
import NavHeader from './NavHeader';
import Favorites from './Favorites';
import Cart from './Cart';
import Search from './Search';
import { } from '../constants/index';

const Header = () => {
  const headerLinks: NavLinkType[] = [
    { title: 'home', url: '/' },
    { title: 'phones', url: '/phones' },
    { title: 'tablets', url: '/tablets' },
    { title: 'accessories', url: '/accessories' },
  ];

  const searchAvailable = [
    'tablets',
    'phones',
    'accessories',
  ];

  const location = useLocation();
  const currentLocation = useMemo(() => (
    location.pathname
      .split('/')
      .slice(1)[0]
  ), [location]);

  const typeOfLocation = location.pathname.split('/');

  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        <NavHeader links={headerLinks} />
      </div>
      <div className="header__container">
        {searchAvailable.some(path => path === currentLocation
          &&
          typeOfLocation.length < 3)
          &&
          (
            <Search currentLocation={currentLocation} />
          )}
        <Favorites />
        <Cart />
      </div>
    </header>
  );
};

export default Header;
