import React from 'react';
import { useSelector } from 'react-redux';

import './FavoritesPage.scss';
import * as store from '../store';
import ProductCard from '../components/ProductCard';

const FavoritesPage = () => {
  const favourites = useSelector(store.getFavourites);

  return (
    <div>
      <h1>Favourites</h1>
      <div className="favourites__list">
        {favourites.map(favouriteProduct => (
          <ProductCard
            key={favouriteProduct.id}
            product={favouriteProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
