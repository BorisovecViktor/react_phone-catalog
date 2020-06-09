import React from 'react';
import { useSelector } from 'react-redux';

import './CartList.scss';
import * as store from '../store';
import CartItem from './CartItem';

const CartList = () => {
  const cart = useSelector(store.getCart);

  return (
    <ul className="cart__list">
      {cart.map(cartProduct => (
        <CartItem
          key={cartProduct.id}
          product={cartProduct.product}
          quantity={cartProduct.quantity}
        />
      ))}
    </ul>
  );
};

export default CartList;
