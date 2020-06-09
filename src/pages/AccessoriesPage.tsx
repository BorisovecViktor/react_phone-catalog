import React from 'react';

import ProductsList from '../components/ProductsList';

type Props = {
  filter: string;
};

const AccessoriesPage: React.FC<Props> = ({ filter }) => {
  return (
    <>
      <h1 className="page__title">
        Accessories
      </h1>
      <ProductsList filter={filter} />
    </>
  );
};

export default AccessoriesPage;
