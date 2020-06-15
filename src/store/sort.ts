import { Action } from 'redux';

import { SORT_BY } from '../constants';

const SET_SORT_BY = 'SET_SORT_BY';

type SetSortByAction = Action<typeof SET_SORT_BY> & {
  field: string;
};

export const setSortBy = (field: string) => ({ type: SET_SORT_BY, field });

type PossibleActions = SetSortByAction;

const reducer = (sortBy = SORT_BY.newModels, action: PossibleActions) => {
  switch (action.type) {
    case SET_SORT_BY:
      return action.field;

    default:
      return sortBy;
  }
};

export default reducer;
