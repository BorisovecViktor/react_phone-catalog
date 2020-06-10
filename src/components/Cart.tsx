import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import * as store from '../store';

const Cart = () => {
  const CartCount = (useSelector(store.getCart) || []).length;

  return (
    <div className="header__cart cart">
      <Link
        className="cart__link"
        to="/cart"
      >
        <span />
        <span />
        <span />
        <span />
        {CartCount !== 0 && (
          <span className="cart__counter">
            {CartCount}
          </span>
        )}
      </Link>
    </div>
  );
};

export default Cart;
