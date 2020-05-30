import React from 'react';

import ProductsList from '../components/ProductsList';

type Props = {
  products: Product[];
  filter: string;
};

const TabletsPage: React.FC<Props> = ({ products, filter }) => {
  return (
    <main className="products">
      <h1 className="products__title">
        Tablets
      </h1>
      <ProductsList products={products} filter={filter} />
    </main>
  );
};

export default TabletsPage;
