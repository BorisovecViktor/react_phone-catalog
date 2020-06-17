import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleNavBurger } from '../store/burger';
import * as store from '../store';
import cn from 'classnames';

const NavBurger = () => {
  const dispatch = useDispatch();
  const burger = useSelector(store.getIsNavBurgerOpen);

  return (
    <button
      className={cn('nav__burger burger', {
        'burger--active': burger
      })}
      onClick={() => dispatch(toggleNavBurger(burger))}
    >
      <div className="burger__line"></div>
      <div className="burger__line"></div>
      <div className="burger__line"></div>
    </button>
  );
}

export default NavBurger;
