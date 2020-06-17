import React from 'react';

const ProductTechSpecs = ({
  display,
  hardware,
  storage,
  camera,
  battery,
  sizeAndWeight,
}: ProductDetails) => {

  return (
    display ? (
      <>
        <h3 className="product-details__title">Tech specs</h3>
        <div className="product-details__spec spec spec--text-md">
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
              {storage.ram || '1000 MB'}
            </span>
          </div>
          <div className="spec__container">
            <span className="spec__title">Storage</span>
            <span className="spec__info">
              {storage.flash || '32000MB'}
            </span>
          </div>

          <div className="spec__container">
            <span className="spec__title">Camera</span>
            <span className="spec__info">
              {camera.primary}
            </span>
          </div>
          <div className="spec__container">
            <span className="spec__title">Battery</span>
            <span className="spec__info">
              {battery.type}
            </span>
          </div>
          <div className="spec__container">
            <span className="spec__title">Weight</span>
            <span className="spec__info">
              {sizeAndWeight.weight}
            </span>
          </div>
        </div>
      </>
    ) : null
  );
};

export default ProductTechSpecs;
