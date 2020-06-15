import React from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
  links: NavLinkType[];
};

const NavFooter: React.FC<Props> = ({ links }) => (
  <nav className="nav">
    <ul className="nav__footer-list">
      {links.map(({ title, url }) => (
        <li
          className="nav__footer-item"
          key={title}
        >
          <NavLink
            className="nav__footer-link"
            exact
            activeClassName="nav__footer-link--active"
            to={url}
          >
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default NavFooter;
