import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import * as store from '../store';

const Favorites = () => {
  const favoritesCount = (useSelector(store.getFavourites) || []).length;

  return (
    <div className="header__favorites favorites">
      <Link
        className="favorites__link"
        to="/favorites"
      >
        <span />
        <span />
        <span />
        <span />
        {favoritesCount !== 0 && (
          <span className="favorites__counter">
            {favoritesCount}
          </span>
        )}
      </Link>
    </div>
  );
};

export default Favorites;
