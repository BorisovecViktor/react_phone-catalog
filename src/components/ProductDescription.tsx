import React from 'react';

const ProductDescription = ({
  description,
  additionalFeatures,
}: ProductDetails) => {

  return (
    <>
      <h3 className="product-details__title">About</h3>
      <p className="product-details__text">
        {description}
      </p>
      {additionalFeatures && (
        <>
          <h3 className="product-details__subtitle">Features</h3>
          <p className="product-details__text">
            {additionalFeatures}
          </p>
        </>
      )}
    </>
  );
};

export default ProductDescription;
