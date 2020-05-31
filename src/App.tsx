import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { getProducts } from './helpers/api';
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
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(people => {
        setProducts(people);
      });
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="container">
        <Switch>
          <Redirect from="/home" to="/" />
          <Route path="/" exact component={HomePage} />
          <Route path="/phones">
            <PhonesPage
              products={products}
              filter={FILTERS.phones}
            />
          </Route>
          <Route path="/tablets">
            <TabletsPage
              products={products}
              filter={FILTERS.tablets}
            />
          </Route>
          <Route path="/accessories">
            <AccessoriesPage
              products={products}
              filter={FILTERS.accessories}
            />
          </Route>
          <Route path="/product-details" component={ProductDetailsPage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/favorites" component={FavoritesPage} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </div>
    </div>
  );
};

export default App;
