import React from 'react';
import { Link } from 'react-router-dom';

const Favorites = () => {
  return (
    <div className="header__favorites favorites">
      <Link
        className="favorites__link"
        to="/favorites">
      </Link>
    </div>
  );
}

export default Favorites;

