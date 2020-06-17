import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './CartPage.scss';

import * as store from '../store';
import CartList from '../components/CartList';
import { clearCart } from '../store/cart';
import Spinner from '../components/Spinner';

const CartPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const totalCart = useSelector(store.getCartTotal);
  const cartLength = useSelector(store.getCartLength);
  const loading = useSelector(store.getIsLoading);

  return (
    <>
      {loading
        ?
        <Spinner />
        :
        <div className="cart-page">
          <button
            type="button"
            className="cart-page__link"
            onClick={history.goBack}
          >
            Back
          </button>
          <h1 className="cart-page__title">
            Cart
          </h1>
          {cartLength !== 0 ? (
            <div className="cart-page__container">
              <CartList />
              <div className="cart-page__total">
                <div className="cart-page__total-container">
                  <div className="cart-page__total-price">
                    $
                    {totalCart}
                  </div>
                  <div className="cart-page__total-text">
                    {`Total for ${cartLength} items`}
                  </div>
                  <span className="cart-page__total-devider" />
                  <button
                    className="cart-page__total-checkout"
                    type="button"
                    onClick={() => {
                      history.push('/checkout');
                      dispatch(clearCart());
                    }}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          ) : (
              <div className="cart-page__message">
                Your cart is empty
              </div>
            )}
        </div>
      }
    </>
  );
};

export default CartPage;
