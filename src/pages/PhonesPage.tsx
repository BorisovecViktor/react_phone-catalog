import React from 'react';

import ProductsList from '../components/ProductsList';
import Breadcrumbs from '../components/Breadcrumbs';

type Props = {
  filter: string;
};

const PhonesPage: React.FC<Props> = ({ filter }) => (
  <>
    <Breadcrumbs />
    <h1 className="page__title">
      Mobile phones
    </h1>
    <ProductsList filter={filter} />
  </>
);

export default PhonesPage;
