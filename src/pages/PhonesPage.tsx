import React from 'react';

import './PhonesPage.scss';
import ProductsList from '../components/ProductsList';

type Props = {
  products: Product[];
  filter: string;
};

const PhonesPage: React.FC<Props> = ({ products, filter }) => {
  return (
    <main className="products">
      <h1 className="products__title">
        Mobile phones
      </h1>
      <ProductsList products={products} filter={filter} />
    </main>
  );
};

export default PhonesPage;
