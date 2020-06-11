import React from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
  links: NavLinkType[];
};

const Nav: React.FC<Props> = ({ links }) => (
  <nav className="nav">
    <ul className="nav__list">
      {links.map(({ title, url }) => (
        <li
          className="nav__item"
          key={title}
        >
          <NavLink
            className="nav__link"
            exact
            activeClassName="nav__link--active"
            to={url}
          >
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
