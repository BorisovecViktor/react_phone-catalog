import React, { useMemo } from 'react';

import ProductCard from './ProductCard';
import './ProductsList.scss';

type Props = {
  products: Product[];
  filter: string;
};

const ProductsList: React.FC<Props> = ({ products, filter }) => {
  const visibleProducts = useMemo(() => {
    const result = products.filter(product => product.type === filter);

    return result;
  }, [products, filter]);

  return (
    <main className="products">
      <div className="products__subtitle">
        {products && `${products.length} models`}
      </div>
      <div className="products__filters">
        <div className="products__filter">
          <div className="products__filter-title">
            Sort by
          </div>
          <select className="products__filter-select">
            <option>Newest Arrivals</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
        <div className="products__filter">
          <div className="products__filter-title">
            Items on page
          </div>
          <select className="products__filter-select products__filter-select--items-on-page">
            <option>All</option>
            <option>4</option>
            <option>8</option>
            <option>16</option>
            <option>32</option>
          </select>
        </div>
      </div>
      <div className="products__list">
        {visibleProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default ProductsList;
