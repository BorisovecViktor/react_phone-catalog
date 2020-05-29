import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div className="header__cart cart">
      <Link
        className="cart__link"
        to="/cart"
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </Link>
    </div>
  );
}

export default Cart;

