import React, { useState, useEffect, useRef } from 'react';
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
  const [inputQuantity, setinputQuantity] = useState(quantity);
  const inputEl = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setinputQuantity(quantity);
  }, [quantity]);

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
          className={classNames(
            'cart__item-button-minus',
            { 'cart__item-button-minus--disabled': quantity === 1 },
          )}
          type="button"
          onClick={() => dispatch(setCartAmount(id, quantity - 1))}
        >
          {' '}
        </button>
        <div className="cart__item-quantity">
          <input
            className="cart__item-quantity-input"
            type="number"
            maxLength={2}
            ref={inputEl}
            value={inputQuantity}
            onChange={e => setinputQuantity(+e.target.value)}
            onKeyUp={e => {
              if (e.key === 'Enter') {
                dispatch(setCartAmount(id, +inputQuantity));
                inputEl.current?.blur();
              }
            }}
            onBlur={() => setinputQuantity(quantity)}
          />
        </div>
        <button
          className={classNames(
            'cart__item-button-plus',
            { 'cart__item-button-plus--disabled': quantity === 10 },
          )}
          type="button"
          onClick={() => dispatch(setCartAmount(id, quantity + 1))}
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
