import React from 'react';

const ProductPrice = ({ price, discount }: ProductPriceProps) => (
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
);

export default ProductPrice;
