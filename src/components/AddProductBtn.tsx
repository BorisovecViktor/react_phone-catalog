import React, { useState } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import * as store from '../store';
import { addToCart, removeFromCart } from '../store/cart';

type Props = {
  product: Product;
};

const AddProductBtn: React.FC<Props> = ({ product }) => {
  const { id } = product;

  const dispatch = useDispatch();
  const cart = useSelector(store.getCart);
  const isAddedToCart = cart.some((item: Cart) => item.id === id);
  const [firstClick, setFirstClick] = useState(isAddedToCart);
  const [cartButtonText, setCartButtonText] = useState(isAddedToCart ? 'Added to cart' : 'Add to cart');

  return (
    <button
      className={classNames(
        'product__button-buy',
        { 'product__button-buy--active': isAddedToCart },
        { 'product__button-buy--remove': firstClick },
      )}
      type="button"
      onClick={(e) => {
        e.stopPropagation();

        if (isAddedToCart) {
          dispatch(removeFromCart(id));
          setCartButtonText('Add to cart');
          setFirstClick(false);
        } else {
          dispatch(addToCart(id, 1, product));
          setCartButtonText('Added to cart');
        }
      }}

      onMouseEnter={() => {
        if (isAddedToCart) {
          setCartButtonText('Remove');
        }
      }}

      onMouseLeave={() => {
        if (isAddedToCart) {
          setCartButtonText('Added to cart');
          setFirstClick(true);
        }
      }}
    >
      {cartButtonText}
    </button>
  );
};

export default AddProductBtn;
