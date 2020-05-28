import React from 'react';

import ProductCard from './ProductCard';
import './ProductsList.scss';

type Props = {
  products: Product[];
};

const ProductsList: React.FC<Props> = ({ products }) => {
  return (
    <main className="products">
      <h1 className="products__title">
        Mobile phones
      </h1>
      <div className="products__subtitle">
        {products && `${products.length} models`}
      </div>
      <div className="products__list">
        {products.map(product => (
          <ProductCard product={product} />
        ))}
      </div>
      <div className="products__filters">
        some
      </div>
    </main>
  );
};

export default ProductsList;
