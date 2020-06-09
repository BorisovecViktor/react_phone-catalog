import React from 'react';

import ProductsList from '../components/ProductsList';

type Props = {
  products: Product[];
  filter: string;
};

const TabletsPage: React.FC<Props> = ({ products, filter }) => {
  return (
    <>
      <h1 className="page__title">
        Tablets
      </h1>
      <ProductsList products={products} filter={filter} />
    </>
  );
};

export default TabletsPage;
