import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './CartPage.scss';

import * as store from '../store';
import CartList from '../components/CartList';

const CartPage = () => {
  const history = useHistory();
  const totalCart = useSelector(store.getCartTotal);
  const cartLength = useSelector(store.getCartLength);

  return (
    <div>
      <button
        type="button"
        onClick={history.goBack}
      >
        back
      </button>
      <h1>Cart</h1>
      <CartList />
      <div>
        {`Total: ${totalCart} for ${cartLength} items`}
      </div>
    </div>
  );
};

export default CartPage;
