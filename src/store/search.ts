import { Action } from 'redux';

const SET_QUERY = 'SET_QUERY';

type setQueryAction = Action<typeof SET_QUERY> & {
  field: string;
};

export const setSearchQuery = (field: string) => ({ type: SET_QUERY, field });

type PossibleActions = setQueryAction;

const reducer = (searchQuery = '', action: PossibleActions) => {
  switch (action.type) {
    case SET_QUERY:
      return action.field;

    default:
      return searchQuery;
  }
};

export default reducer;
