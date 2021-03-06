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
  const [inputQuantity, setInputQuantity] = useState(String(quantity));
  const inputEl = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setInputQuantity(String(quantity));
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
            type="text"
            maxLength={2}
            ref={inputEl}
            value={inputQuantity}
            onChange={e => {
              if (!Number(e.target.value)) {
                setInputQuantity('');

                return;
              }

              setInputQuantity(e.target.value);
            }}
            onKeyUp={e => {
              if (e.key === 'Enter') {
                dispatch(setCartAmount(id, +inputQuantity ? +inputQuantity : 1));
                inputEl.current?.blur();
              }
            }}
            onClick={() => setInputQuantity('')}
            onBlur={(e) => {
              if (e.target.value === '') {
                setInputQuantity(String(quantity));

                return;
              }

              dispatch(setCartAmount(id, +e.target.value));
            }}
          />
        </div>
        <button
          className={classNames(
            'cart__item-button-plus',
            { 'cart__item-button-plus--disabled': quantity === 99 },
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
