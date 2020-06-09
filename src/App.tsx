import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import * as store from './store';
import { FILTERS } from './constants';
import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import PhonesPage from './pages/PhonesPage';
import TabletsPage from './pages/TabletsPage';
import AccessoriesPage from './pages/AccessoriesPage';
import FavoritesPage from './pages/FavoritesPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';

import './App.scss';

const App = () => {
  const products = useSelector(store.getProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(store.loadProducts());
  }, [dispatch]);

  return (
    <div className="app">
      <Header />
      <main>
        <div className="container">
          <Switch>
            <Redirect from="/home" to="/" />
            <Route path="/" exact>
              <HomePage
                products={products}
              />
            </Route>
            <Route path="/phones">
              <PhonesPage
                filter={FILTERS.phones}
              />
            </Route>
            <Route path="/tablets">
              <TabletsPage
                filter={FILTERS.tablets}
              />
            </Route>
            <Route path="/accessories">
              <AccessoriesPage
                filter={FILTERS.accessories}
              />
            </Route>
            <Route path="/product-details" component={ProductDetailsPage} />
            <Route path="/cart" component={CartPage} />
            <Route path="/favorites" component={FavoritesPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
