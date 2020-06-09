import { Action } from 'redux';


const ADD_FAVOURITE = 'ADD_FAVOURITE';
const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';

type addToFavouritesAction = Action<typeof ADD_FAVOURITE> & {
  product: Product;
};

type removeFromFavouritesAction = Action<typeof REMOVE_FAVOURITE> & {
  product: Product;
};

export const addToFavourites = (product: Product) => ({ type: ADD_FAVOURITE, product });
export const removeFromFavourites = (product: Product) => (
  {
    type: REMOVE_FAVOURITE,
    product,
  });

type PossibleActions = addToFavouritesAction | removeFromFavouritesAction;

const reducer = (favourites: Product[] = [], action: PossibleActions) => {
  switch (action.type) {
    case ADD_FAVOURITE:
      return [...favourites, action.product];

    case REMOVE_FAVOURITE:
      return [...favourites].filter(product => product !== action.product);

    default:
      return favourites;
  }
};

export default reducer;
