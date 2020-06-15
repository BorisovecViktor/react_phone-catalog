import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as store from '../store';
import { toggleNavBurger } from '../store/burger';

const BackDrop = () => {
  const dispatch = useDispatch();
  const burger = useSelector(store.getIsNavBurgerOpen);

  return (
    burger ?
      <div
        className="backdrop"
        onClick={() => dispatch(toggleNavBurger(burger))}
      >
      </div>
      : null
  );
}

export default BackDrop;
