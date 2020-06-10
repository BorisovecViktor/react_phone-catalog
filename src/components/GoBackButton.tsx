import React from 'react';
import { useHistory } from 'react-router-dom';

const GoBackButton = () => {
  const history = useHistory();
  const goBack = () => history.goBack();

  return (
    <button
      type="button"
      className="details__button-back button-back"
      onClick={goBack}
    >
      Back
    </button>
  );
};

export default GoBackButton;
