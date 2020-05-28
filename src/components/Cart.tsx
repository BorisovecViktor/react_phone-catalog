import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div className="header__cart cart">
      <Link
        className="cart__link"
        to="/cart">
      </Link>
    </div>
  );
}

export default Cart;

