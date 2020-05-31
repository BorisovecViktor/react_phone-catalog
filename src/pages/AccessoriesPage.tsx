import React from 'react';

import ProductsList from '../components/ProductsList';

type Props = {
  products: Product[];
  filter: string;
};

const AccessoriesPage: React.FC<Props> = ({ products, filter }) => {
  return (
    <main className="products">
      <h1 className="products__title">
        Accessories
      </h1>
      <ProductsList products={products} filter={filter} />
    </main>
  );
};

export default AccessoriesPage;
