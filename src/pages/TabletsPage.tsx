import React from 'react';

import ProductsList from '../components/ProductsList';
import Breadcrumbs from '../components/Breadcrumbs';
import { useSelector } from 'react-redux';
import * as store from '../store';

type Props = {
  filter: string;
};

const TabletsPage: React.FC<Props> = ({ filter }) => {
  const products = useSelector(store.getProducts);

  return (
    <>
      <Breadcrumbs products={products} />
      <h1 className="page__title">
        Tablets
      </h1>
      <ProductsList filter={filter} />
    </>
  );
};

export default TabletsPage;
