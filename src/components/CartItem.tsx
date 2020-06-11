import React from 'react';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';

import './CartItem.scss';

import { setCartAmount, removeFromCart } from '../store/cart';

type Props = {
  product: Product;
  quantity: number;
};

const CartItem: React.FC<Props> = ({ product, quantity }) => {
  const {
    id,
    name,
    price,
    imageUrl,
  } = product;
  const dispatch = useDispatch();

  return (
    <li className="cart__item">
      <button
        className="cart__item-remove"
        type="button"
        onClick={() => dispatch(removeFromCart(id))}
      >
        {' '}
      </button>
      <div>
        <img
          className="cart__item-image"
          src={imageUrl}
          alt={name}
        />
      </div>
      <div className="cart__item-title">
        {name}
      </div>
      <div className="cart__item-actions">
        <button
          className="cart__item-button-plus"
          type="button"
          onClick={() => dispatch(setCartAmount(id, +1))}
        >
          {' '}
        </button>
        <div className="cart__item-quantity">
          {quantity}
        </div>
        <button
          className={classNames(
            'cart__item-button-minus',
            { 'cart__item-button-minus--disabled': quantity === 1 },
          )}
          type="button"
          onClick={() => dispatch(setCartAmount(id, -1))}
        >
          {' '}
        </button>
      </div>
      <div className="cart__item-price">
        {`$${price}`}
      </div>
    </li>
  );
};

export default CartItem;
