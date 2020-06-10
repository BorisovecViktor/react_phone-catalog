import React from 'react';

import ProductsList from '../components/ProductsList';
import Breadcrumbs from '../components/Breadcrumbs';

type Props = {
  products: Product[];
  filter: string;
};

const TabletsPage: React.FC<Props> = ({ products, filter }) => {
  return (
    <>
      <Breadcrumbs products={products} />
      <h1 className="page__title">
        Tablets
      </h1>
      <ProductsList products={products} filter={filter} />
    </>
  );
};

export default TabletsPage;
