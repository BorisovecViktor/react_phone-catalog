import React from 'react';
import { useSelector } from 'react-redux';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import './CartList.scss';
import * as store from '../store';
import CartItem from './CartItem';

const CartList = () => {
  const cart = useSelector(store.getCart);

  return (
    <ul>
      <TransitionGroup tag="ul" className="cart__list">
        {cart.map(cartProduct => (
          <CSSTransition
            key={cartProduct.id}
            timeout={300}
            classNames="cart-item"
          >
            <CartItem
              key={cartProduct.id}
              product={cartProduct.product}
              quantity={cartProduct.quantity}
            />
          </CSSTransition>
        ))}

      </TransitionGroup>
    </ul>
  );
};

export default CartList;
