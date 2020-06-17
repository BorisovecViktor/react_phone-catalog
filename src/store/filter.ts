import { Action } from 'redux';

const FILTER_BY = 'FILTER_BY';

type FilterByAction = Action<typeof FILTER_BY> & {
  field: string;
};

export const setFilterBy = (field: string) => ({ type: FILTER_BY, field });

type PossibleActions = FilterByAction;

const reducer = (filter = '', action: PossibleActions) => {
  switch (action.type) {
    case FILTER_BY:
      return action.field;

    default:
      return filter;
  }
};

export default reducer;
