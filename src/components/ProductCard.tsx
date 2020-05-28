import React from 'react';

import './ProductCard.scss';

type Props = {
  product: Product;
};

const ProductCard: React.FC<Props> = ({ product }) => {
  const {
    name,
    imageUrl,
    price,
    discount,
    screen,
    capacity,
    ram,
  } = product;

  return (
    <article className="product">
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
              {price - ((discount * price) / 100)}
            </div>
            <div className="product__old-price">
              {price}
            </div>
          </>
        ) : (
          <div className="product__price">
            {price}
          </div>
        )}
      </div>
      <span className="product__divider-line" />
      <div className="product__details">
        <div className="product__details-screen">
          {screen}
        </div>
        <div className="product__details-screen">
          {capacity}
        </div>
        <div className="product__details-screen">
          {ram}
        </div>
      </div>
      <div className="product__actions">
        <button type="button">
          Add to cart
        </button>
        <button type="button">
          heart icon
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
