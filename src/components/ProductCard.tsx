import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCT_PATHS } from '../constants';
import ProductPrice from './ProductPrice';
import AddProductBtn from './AddProductBtn';
import FavoriteBtn from '../components/FavoriteBtn';

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
        <ProductPrice
          price={price}
          discount={discount}
        />
        <div className="product__divider"></div>
        <div className="product__spec spec">
          <div className="spec__container">
            <div className="spec__title">
              Screen
            </div>
            <div className="spec__info">
              {screen}
            </div>
          </div>
          <div className="spec__container">
            <div className="spec__title">
              Capacity
            </div>
            <div className="spec__info">
              {capacity}
            </div>
          </div>
          <div className="spec__container">
            <div className="spec__title">
              RAM
            </div>
            <div className="spec__info">
              {ram}
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
      </Link>
    </article>
  );
};

export default ProductCard;
