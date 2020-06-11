import React from 'react';
import { useHistory } from 'react-router-dom';

import './CheckoutPage.scss';

const CheckoutPage = () => {
  const history = useHistory();

  return (
    <div className="checkout">
      <div className="checkout__message">
        Thank you for your order!
        <button
          type="button"
          className="checkout__link"
          onClick={() => history.push('/')}
        >
          Back to Main Page
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
