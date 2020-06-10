/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import './ProductCard.scss';

import * as store from '../store';
import { addToCart, removeFromCart } from '../store/cart';
import { addToFavourites, removeFromFavourites } from '../store/favourites';
import { PRODUCT_PATHS } from '../constants';

type Props = {
  product: Product;
};

const ProductCard: React.FC<Props> = ({ product }) => {
  const {
    id,
    name,
    type,
    imageUrl,
    price,
    discount,
    screen,
    capacity,
    ram,
  } = product;

  const dispatch = useDispatch();
  const history = useHistory();
  const cart = useSelector(store.getCart);
  const favourites = useSelector(store.getFavourites);
  const isAddedToCart = cart.some((item: Cart) => item.id === id);
  const isAddedToFavourites = favourites.some((item: Product) => item.id === id);

  const [cartButtonText, setCartButtonText] = useState(isAddedToCart ? 'Added to cart' : 'Add to cart');
  const [firstClick, setFirstClick] = useState(false);

  const handleClickToDetails = () => {
    history.push(`/${PRODUCT_PATHS[type]}/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <article
      className="product"
      onClick={handleClickToDetails}
    >
      <img
        className="product__image"
        src={imageUrl}
        alt={name}
      />
      <h2 className="product__title">
        {name}
      </h2>
      <div className="product__prices">
        {discount ? (
          <>
            <div className="product__price">
              $
              {price - ((discount * price) / 100)}
            </div>
            <div className="product__old-price">
              $
              {price}
            </div>
          </>
        )
          : (
            <div className="product__price">
              $
              {price}
            </div>
          )}
      </div>
      <div className="product__divider" />
      <div className="product__details">
        <div className="product__detail">
          <div className="product__detail-name">
            Screen
          </div>
          <div className="product__detail-value">
            {screen || '-'}
          </div>
        </div>
        <div className="product__detail">
          <div className="product__detail-name">
            Capacity
          </div>
          <div className="product__detail-value">
            {capacity || '-'}
          </div>
        </div>
        <div className="product__detail">
          <div className="product__detail-name">
            RAM
          </div>
          <div className="product__detail-value">
            {ram || '-'}
          </div>
        </div>
      </div>
      <div className="product__actions">
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
              setCartButtonText('Remove from cart');
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
        <button
          className={classNames(
            'product__button-favorite',
            { 'product__button-favorite--active': isAddedToFavourites },
          )}
          type="button"
          onClick={(e) => {
            e.stopPropagation();

            if (isAddedToFavourites) {
              dispatch(removeFromFavourites(product));
            } else {
              dispatch(addToFavourites(product));
            }
          }}
        >
          {' '}
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
