import React from 'react';

const ProductShortSpecs = ({
  display,
  hardware,
  storage,
}: ProductDetails) => {

  return (
    display &&
    <div className="product-details__spec spec">
      <div className="spec__container">
        <span className="spec__title">Screen</span>
        <span className="spec__info">
          {display.screenSize}
        </span>
      </div>
      <div className="spec__container">
        <span className="spec__title">Resolution</span>
        <span className="spec__info">
          {display.screenResolution}
        </span>
      </div>
      <div className="spec__container">
        <span className="spec__title">Processor</span>
        <span className="spec__info">
          {hardware.cpu}
        </span>
      </div>
      <div className="spec__container">
        <span className="spec__title">RAM</span>
        <span className="spec__info">
          {storage.ram || '128 MB'}
        </span>
      </div>
    </div>
  );
};

export default ProductShortSpecs;
