import { Action } from 'redux';

const IS_NAV_BURGER_OPEN = 'IS_NAV_BURGER_OPEN';

type SetNavBurgerAction = Action<typeof IS_NAV_BURGER_OPEN> & {
  isNavBurgerOpen: boolean;
};

export const toggleNavBurger = (isNavBurgerOpen: boolean) => ({
  type: IS_NAV_BURGER_OPEN,
  isNavBurgerOpen,
});

type PossibleActions = SetNavBurgerAction;

const reducer = (isNavBurgerOpen = false, action: PossibleActions) => {
  switch (action.type) {
    case IS_NAV_BURGER_OPEN:
      return !action.isNavBurgerOpen;

    default: return isNavBurgerOpen;
  }
}

export default reducer;
