import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  Redirect,
  useLocation,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import * as store from './store';
import { FILTERS } from './constants';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.scss';

import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import PhonesPage from './pages/PhonesPage';
import TabletsPage from './pages/TabletsPage';
import NotFoundPage from './pages/NotFoundPage';
import CheckoutPage from './pages/CheckoutPage';
import FavoritesPage from './pages/FavoritesPage';
import AccessoriesPage from './pages/AccessoriesPage';
import ProductDetailsPage from './pages/ProductDetailsPage';


const App = () => {
  const products = useSelector(store.getProducts);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(store.loadProducts());
  }, [dispatch]);

  return (
    <div className="app">
      <Header />
      <main>
        <div className="container">
          <TransitionGroup className="transition-group">
            <CSSTransition
              key={location.pathname}
              timeout={{ enter: 300, exit: 300 }}
              classNames="fade"
            >
              <section className="route-section">
                <Switch
                  location={location}
                >
                  <Redirect from="/home" to="/" />
                  <Route path="/" exact>
                    <HomePage
                      products={products}
                    />
                  </Route>
                  <Route path="/:productType/:productId">
                    <ProductDetailsPage
                      products={products}
                    />
                  </Route>
                  <Route path="/phones" exact>
                    <PhonesPage
                      filter={FILTERS.phones}
                    />
                  </Route>
                  <Route path="/tablets" exact>
                    <TabletsPage
                      filter={FILTERS.tablets}
                    />
                  </Route>
                  <Route path="/accessories" exact>
                    <AccessoriesPage
                      filter={FILTERS.accessories}
                    />
                  </Route>
                  <Route path="/cart" component={CartPage} />
                  <Route path="/favorites" component={FavoritesPage} />
                  <Route path="/checkout" component={CheckoutPage} />
                  <Route component={NotFoundPage} />
                </Switch>
              </section>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
