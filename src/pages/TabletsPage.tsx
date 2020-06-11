import React from 'react';
import { useSelector } from 'react-redux';

import * as store from '../store';
import ProductsList from '../components/ProductsList';
import Breadcrumbs from '../components/Breadcrumbs';

type Props = {
  filter: string;
};

const TabletsPage: React.FC<Props> = ({ filter }) => {
  const searchQuery = useSelector(store.getSearchQuery);

  return (
    <>
      {searchQuery === '' && (
        <>
          <Breadcrumbs />
          <h1 className="page__title">
            Tablets
          </h1>
        </>
      )}
      <ProductsList filter={filter} />
    </>
  );
};

export default TabletsPage;
