import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Dispatch } from 'react';

import * as api from '../helpers/api';
import { SORT_BY } from '../constants';
import productsReducer, { setProducts } from './products';
import productsDetailsReducer, { setProductsDetails } from './productsDetails';
import errorReducer, { setError } from './error';
import filterReducer from './filter';
import sortReducer from './sort';
import paginationReducer from './pagination';
import cartReducer from './cart';
import favouritesReducer from './favourites';
import searchReducer from './search';
import navBurgerReducer from './burger';
import loadingReducer, { startLoading, finishLoading } from './loading';


const rootReducer = combineReducers({
  products: productsReducer,
  productsDetails: productsDetailsReducer,
  filterBy: filterReducer,
  sortBy: sortReducer,
  errorMessage: errorReducer,
  pagination: paginationReducer,
  cart: cartReducer,
  favourites: favouritesReducer,
  searchQuery: searchReducer,
  isNavBurgerOpen: navBurgerReducer,
  isLoading: loadingReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const getProducts = (state: RootState) => state.products;
export const getproductsDetails = (state: RootState) => state.productsDetails;
export const getPerPage = (state: RootState) => state.pagination.perPage;
export const getPage = (state: RootState) => state.pagination.page;
export const getCart = (state: RootState) => state.cart;
export const getCartLength = (state: RootState) => state.cart.length;
export const getFavourites = (state: RootState) => state.favourites;
export const getSearchQuery = (state: RootState) => state.searchQuery;
export const getIsNavBurgerOpen = (state: RootState) => state.isNavBurgerOpen;
export const getIsLoading = (state: RootState) => state.isLoading;

export const loadProducts = () => {
  return async (dispatch: Dispatch<unknown>) => {
    dispatch(setError(''));
    dispatch(startLoading());

    try {
      const products = await api.fetchProducts();

      dispatch(setProducts(products));
      dispatch(finishLoading());
    } catch (e) {
      dispatch(setError(e.message));
      dispatch(finishLoading());
    }
  };
};

export const loadProductsDetails = (productId: string) => {
  return async (dispatch: Dispatch<unknown>) => {
    dispatch(setError(''));
    dispatch(startLoading());

    try {
      const productsDetails = await api.fetchProductsDetails(productId);

      dispatch(setProductsDetails(productsDetails));
      dispatch(finishLoading());
    } catch (e) {
      dispatch(setError(e.message));
      dispatch(finishLoading());
    }
  };
};

export const getCategoryLength = (state: RootState) => {
  return (state.products.filter((item: Product) => item.type === state.filterBy) || []).length;
};

export const getVisibleProducts = (state: RootState) => {
  let visibleProducts: Product[] = state.products.filter((item: Product) => {
    if (state.filterBy !== '') {
      return item.type === state.filterBy;
    }

    return item;
  });

  visibleProducts = visibleProducts.filter((item: Product) => {
    if (state.searchQuery !== '') {
      return item.name.toLowerCase().includes(state.searchQuery);
    }

    return item;
  });

  switch (state.sortBy) {
    case SORT_BY.priceAsc:
      visibleProducts.sort((a: Product, b: Product): number => (
        (a.price - ((a.discount * a.price) / 100)) - (b.price - ((b.discount * b.price) / 100))
      ));
      break;

    case SORT_BY.priceDesc:
      visibleProducts.sort((a: Product, b: Product): number => (
        (b.price - ((b.discount * b.price) / 100)) - (a.price - ((a.discount * a.price) / 100))
      ));
      break;

    case SORT_BY.hotPrice:
      visibleProducts
        .sort((a: Product, b: Product): number => (
          (b.discount / 100) * b.price) - ((a.discount / 100) * a.price));
      break;

    case SORT_BY.newModels:
      visibleProducts
        .sort((a: Product, b: Product): number => a.age - b.age);
      break;

    default:
      break;
  }

  let endId = (state.pagination.perPage * state.pagination.page) - 1;
  const startId = state.pagination.page === 1
    ? state.pagination.page - 1
    : (endId - state.pagination.perPage) + 1;

  if (endId > visibleProducts.length) {
    endId = visibleProducts.length;
  }

  return visibleProducts.filter((_product, index) => index >= startId && index <= endId);
};

export const getCartTotal = (state: RootState) => {
  let cartTotal = 0;

  state.cart.forEach(cartProduct => {
    cartTotal += cartProduct.product.price * cartProduct.quantity;
  });

  return cartTotal;
};

const persistedState = localStorage.getItem('rootState')
  ? JSON.parse(localStorage.getItem('rootState') || '')
  : {};

const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk)),
);

store.subscribe(() => {
  localStorage.setItem('rootState', JSON.stringify(store.getState()));
});

export default store;
