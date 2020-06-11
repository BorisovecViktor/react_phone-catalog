import React from 'react';
import classNames from 'classnames';
import * as store from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavourites, removeFromFavourites } from '../store/favourites';

type Props = {
  product: Product;
};

const FavoriteBtn: React.FC<Props> = ({ product }) => {
  const { id } = product;

  const dispatch = useDispatch();
  const favourites = useSelector(store.getFavourites);
  const isAddedToFavourites = favourites.some((item: Product) => item.id === id);

  return (
    <button
      className={classNames(
        'product__button-favorite',
        { 'product__button-favorite--active': isAddedToFavourites },
      )}
      type="button"
      onClick={() => {
        if (isAddedToFavourites) {
          dispatch(removeFromFavourites(product));
        } else {
          dispatch(addToFavourites(product));
        }
      }}
    >
      {' '}
    </button>
  )
}

export default FavoriteBtn;
