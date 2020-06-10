import React from 'react';

import './PhonesPage.scss';
import ProductsList from '../components/ProductsList';
import Breadcrumbs from '../components/Breadcrumbs';

type Props = {
  products: Product[];
  filter: string;
};

const PhonesPage: React.FC<Props> = ({ products, filter }) => {
  return (
    <>
      <Breadcrumbs products={products} />
      <h1 className="page__title">
        Mobile phones
      </h1>
      <ProductsList products={products} filter={filter} />
    </>
  );
};

export default PhonesPage;
