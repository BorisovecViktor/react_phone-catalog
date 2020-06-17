import React from 'react';
import { useSelector } from 'react-redux';

import * as store from '../store';
import ProductsList from '../components/ProductsList';
import Breadcrumbs from '../components/Breadcrumbs';
import Spinner from '../components/Spinner';

type Props = {
  filter: string;
};

const AccessoriesPage: React.FC<Props> = ({ filter }) => {
  const searchQuery = useSelector(store.getSearchQuery);
  const loading = useSelector(store.getIsLoading);

  return (
    <>
      {loading
        ?
        <Spinner />
        :
        <>
          {searchQuery === '' && (
            <>
              <Breadcrumbs />
              <h1 className="page__title">
                Accessories
          </h1>
            </>
          )}
          <ProductsList filter={filter} />
        </>
      }
    </>
  );
};

export default AccessoriesPage;
