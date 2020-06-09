import React from 'react';

import ProductsList from '../components/ProductsList';

type Props = {
  products: Product[];
  filter: string;
};

const AccessoriesPage: React.FC<Props> = ({ products, filter }) => {
  return (
    <>
      <h1 className="page__title">
        Accessories
      </h1>
      <ProductsList products={products} filter={filter} />
    </>
  );
};

export default AccessoriesPage;
