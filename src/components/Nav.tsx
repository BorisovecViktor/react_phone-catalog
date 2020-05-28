import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const headerLinks: HeaderLink[] = [
    { title: 'HOME', url: '/#' },
    { title: 'PHONES', url: '/phones' },
    { title: 'TABLETS', url: '/tablets' },
    { title: 'ACCESSORIES', url: '/accessories' },
  ]
  return (
    <nav className="header__nav nav">
      <ul className="nav__list">
        {headerLinks.map(({ title, url }) => (
          <li
            className="nav__item"
            key={title}>
            <NavLink
              className="nav__link"
              activeClassName="nav__link--active"
              to={url}>
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;

