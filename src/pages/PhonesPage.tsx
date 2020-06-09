import React from 'react';

import './PhonesPage.scss';
import ProductsList from '../components/ProductsList';

type Props = {
  filter: string;
};

const PhonesPage: React.FC<Props> = ({ filter }) => {
  return (
    <>
      <h1 className="page__title">
        Mobile phones
      </h1>
      <ProductsList filter={filter} />
    </>
  );
};

export default PhonesPage;
