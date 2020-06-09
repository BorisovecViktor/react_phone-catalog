import React from 'react';
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
        type="button"
        onClick={() => dispatch(removeFromCart(id))}
      >
        x
      </button>
      <div>
        <img
          className="cart__item-image"
          src={imageUrl}
          alt={name}
        />
      </div>
      <div>
        {name}
      </div>
      <div>
        <button
          type="button"
          onClick={() => dispatch(setCartAmount(id, +1))}
        >
          +
        </button>
        {quantity}
        <button
          type="button"
          onClick={() => dispatch(setCartAmount(id, -1))}
        >
          -
        </button>
      </div>
      <div>
        {price}
      </div>
    </li>
  );
};

export default CartItem;
