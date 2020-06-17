import React from 'react';
import { useSelector } from 'react-redux';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import './FavoritesPage.scss';
import * as store from '../store';
import ProductCard from '../components/ProductCard';
import Breadcrumbs from '../components/Breadcrumbs';
import Spinner from '../components/Spinner';

const FavoritesPage = () => {
  const favourites = useSelector(store.getFavourites);
  const loading = useSelector(store.getIsLoading);

  return (
    <>
      {loading
        ?
        <Spinner />
        :
        <div className="favourites">
          <Breadcrumbs />
          <h1 className="favourites__title">
            Favourites
      </h1>
          {favourites.length > 0 && (
            <div className="favourites__subtitle">
              {`${favourites.length} items`}
            </div>
          )}
          {favourites.length > 0 ? (
            <div className="favourites__list">
              {favourites.map(favouriteProduct => (
                <ProductCard
                  key={favouriteProduct.id}
                  product={favouriteProduct}
                />
              ))}
            </div>
          ) : (
              <div className="favourites__message">
                No favorites yet
              </div>
            )}
        </div>
      )}
      {favourites.length > 0 ? (
        <TransitionGroup className="favourites__list">
          {favourites.map(favouriteProduct => (
            <CSSTransition
              key={favouriteProduct.id}
              timeout={300}
              classNames="fav-item"
            >
              <ProductCard
                key={favouriteProduct.id}
                product={favouriteProduct}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      ) : (
        <div className="favourites__message">
          No favorites yet
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
