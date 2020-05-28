import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

import Nav from './Nav';
import Favorites from './Favorites';
import Cart from './Cart';

import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          <img src="./img/logo.svg" alt="logo" />
        </Link>
        <Nav />
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
