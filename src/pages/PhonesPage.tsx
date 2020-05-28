import React from 'react';

import './PhonesPage.scss';
import ProductsList from '../components/ProductsList';

type Props = {
  products: Product[];
};

const PhonesPage: React.FC<Props> = ({ products }) => {
  return (
    <ProductsList products={products} />
  );
};

export default PhonesPage;
