import React from 'react';

import ProductsList from '../components/ProductsList';
import Breadcrumbs from '../components/Breadcrumbs';

type Props = {
  filter: string;
};

const AccessoriesPage: React.FC<Props> = ({ filter }) => {
  return (
    <>
      <Breadcrumbs />
      <h1 className="page__title">
        Accessories
      </h1>
      <ProductsList filter={filter} />
    </>
  );
};

export default AccessoriesPage;
