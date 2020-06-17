import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

type Props = {
  title: string,
  products: Product[],
}

const ProductsСarousel: React.FC<Props> = ({ title, products }) => {
  const cardWidth = 288;
  const cardGap = 16;
  const frameSize = 4;
  const [position, setPosition] = useState(0);
  const [disableLeftButton, setDisableLeftButton] = useState<boolean>(true);
  const [disableRightButton, setDisableRightButton] = useState<boolean>(false);

  const onLeftSlide = () => {
    setPosition(position + (cardWidth + cardGap));
  }

  const onRightSlide = () => {
    setPosition(position - (cardWidth + cardGap));
  }

  useEffect(() => {
    position >= 0
      ?
      setDisableLeftButton(true)
      :
      setDisableLeftButton(false)

    position <= -((products.length - frameSize) * (cardWidth + cardGap))
      ?
      setDisableRightButton(true)
      :
      setDisableRightButton(false)
  }, [position, products])

  return (
    <>
      <div className="сarousel__header-container">
        <h2 className="сarousel__header">{title}</h2>
        <div className="сarousel__controls">
          <button
            type="button"
            className="сarousel__button сarousel__button--left"
            arial-label="Go to previous frame"
            onClick={onLeftSlide}
            disabled={disableLeftButton}
          >
          </button>
          <button
            type="button"
            className="сarousel__button"
            arial-label="Go to next frame"
            onClick={onRightSlide}
            disabled={disableRightButton}
          >
          </button>
        </div>
      </div>
      <div className="сarousel__container">
        <div className="сarousel__list" style={{ transform: `translateX(${position}px)` }}>
          {products.map(product => (
            <ProductCard
              product={product}
              key={product.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductsСarousel;
