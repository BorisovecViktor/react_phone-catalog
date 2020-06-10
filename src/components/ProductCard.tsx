import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCT_PATHS } from '../constants';

import './ProductCard.scss';

type Props = {
  product: Product;
};

const ProductCard: React.FC<Props> = ({ product }) => {
  const {
    name,
    type,
    imageUrl,
    price,
    discount,
    screen,
    capacity,
    ram,
    id,
  } = product;

  const backToTop = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className="product">
      <Link
        to={`/${PRODUCT_PATHS[type]}/${id}`}
        onClick={backToTop}
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
          ) : (
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
              {screen}
            </div>
          </div>
          <div className="product__detail">
            <div className="product__detail-name">
              Capacity
          </div>
            <div className="product__detail-value">
              {capacity}
            </div>
          </div>
          <div className="product__detail">
            <div className="product__detail-name">
              RAM
          </div>
            <div className="product__detail-value">
              {ram}
            </div>
          </div>
        </div>
        <div className="product__actions">
          <button
            className="product__button-buy"
            type="button"
          >
            Add to cart
        </button>
          <button
            className="product__button-favorite"
            type="button"
          >
            {' '}
          </button>
        </div>
      </Link>
    </article>
  );
};

export default ProductCard;
