import React from 'react';
import { useSelector } from 'react-redux';

import './PhonesPage.scss';

import * as store from '../store';
import ProductsList from '../components/ProductsList';
import Breadcrumbs from '../components/Breadcrumbs';

type Props = {
  filter: string;
};

const PhonesPage: React.FC<Props> = ({ filter }) => {
  const searchQuery = useSelector(store.getSearchQuery);

  return (
    <>
      {searchQuery === '' && (
        <>
          <Breadcrumbs />
          <h1 className="page__title">
            Mobile phones
          </h1>
        </>
      )}
      <ProductsList filter={filter} />
    </>
  );
};

export default PhonesPage;
