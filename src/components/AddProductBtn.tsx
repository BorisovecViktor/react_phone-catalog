import React, { useState } from 'react';
import * as store from '../store';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../store/cart';

type Props = {
  product: Product;
};

const AddProductBtn: React.FC<Props> = ({ product }) => {
  const { id } = product;

  const dispatch = useDispatch();
  const cart = useSelector(store.getCart);
  const isAddedToCart = cart.some((item: Cart) => item.id === id);
  const [cartButtonText, setCartButtonText] = useState(isAddedToCart ? 'Added to cart' : 'Add to cart');

  return (
    <button
      className={classNames(
        'product__button-buy',
        { 'product__button-buy--active': isAddedToCart },
      )}
      type="button"
      onClick={() => {
        if (isAddedToCart) {
          dispatch(removeFromCart(id));
          setCartButtonText('Add to cart');
        } else {
          dispatch(addToCart(id, 1, product));
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
        }
      }}
    >
      {cartButtonText}
    </button>
  )
}

export default AddProductBtn;
