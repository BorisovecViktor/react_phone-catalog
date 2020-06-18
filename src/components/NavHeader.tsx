import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBurger from './NavBurger';
import { useSelector, useDispatch } from 'react-redux';
import { toggleNavBurger } from '../store/burger';
import * as store from '../store';
import cn from 'classnames';

type Props = {
  links: NavLinkType[];
};

const NavHeader: React.FC<Props> = ({ links }) => {
  const dispatch = useDispatch();
  const burger = useSelector(store.getIsNavBurgerOpen);

  return (
    <nav className="nav">
      <NavBurger />
      <ul className={cn("nav__header-list", {
        'nav__header-list--active': burger
      })}>
        {links.map(({ title, url }) => (
          <li
            className="nav__header-item"
            key={title}
          >
            <NavLink
              className="nav__header-link"
              exact
              activeClassName="nav__header-link--active"
              to={{
                pathname: url,
                search: '',
              }}
              onClick={() => {
                window.scrollTo(0, 0);
                if (window.innerWidth < 1024) {
                  dispatch(toggleNavBurger(burger))
                }
              }}
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
};

export default NavHeader;
