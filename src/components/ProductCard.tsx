/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { useHistory } from 'react-router-dom';

import { PRODUCT_PATHS } from '../constants';
import ProductPrice from './ProductPrice';
import AddProductBtn from './AddProductBtn';
import FavoriteBtn from './FavoriteBtn';

import './ProductCard.scss';

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

  const history = useHistory();
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
        <ProductPrice
          price={price}
          discount={discount}
        />
      </div>
      <div className="product__divider" />
      <div className="product__spec spec">
        <div className="spec__container">
          <div className="spec__title">
            Screen
          </div>
          <div className="spec__info">
            {screen || '4.0 inches'}
          </div>
        </div>
        <div className="spec__container">
          <div className="spec__title">
            Capacity
          </div>
          <div className="spec__info">
            {capacity || '1000 MB'}
          </div>
        </div>
        <div className="spec__container">
          <div className="spec__title">
            RAM
          </div>
          <div className="spec__info">
            {ram || '128 MB'}
          </div>
        </div>
      </div>
      <div className="product__actions">
        <AddProductBtn
          product={product}
        />
        <FavoriteBtn
          product={product}
        />
      </div>
    </article>
  );
};

export default ProductCard;
