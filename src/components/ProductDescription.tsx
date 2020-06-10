import React from 'react';

const ProductDescription = ({
  description,
  additionalFeatures,
}: ProductDetails) => {

  return (
    <>
      <h2 className="details__title">About</h2>
      <p className="details__text">
        {description}
      </p>
      {additionalFeatures && (
        <>
          <h3 className="details__subtitle">Features</h3>
          <p className="details__text">
            {additionalFeatures}
          </p>
        </>
      )}
    </>
  );
};

export default ProductDescription;
