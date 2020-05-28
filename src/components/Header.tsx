import React from 'react';
import Logo from './Logo'

import Nav from './Nav';
import Favorites from './Favorites';
import Cart from './Cart';

const Header = () => {
  const headerLinks: NavLinkType[] = [
    { title: 'home', url: '/' },
    { title: 'phones', url: '/phones' },
    { title: 'tablets', url: '/tablets' },
    { title: 'accessories', url: '/accessories' },
  ]
  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        <Nav links={headerLinks} />
      </div>
      <div className="header__container">
        {/* <SearchField /> */}
        <Favorites />
        <Cart />
      </div>
    </header>
  )
};

export default Header;
