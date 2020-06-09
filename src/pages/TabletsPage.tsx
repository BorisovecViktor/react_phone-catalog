import React from 'react';

import ProductsList from '../components/ProductsList';

type Props = {
  filter: string;
};

const TabletsPage: React.FC<Props> = ({ filter }) => {
  return (
    <>
      <h1 className="page__title">
        Tablets
      </h1>
      <ProductsList filter={filter} />
    </>
  );
};

export default TabletsPage;
