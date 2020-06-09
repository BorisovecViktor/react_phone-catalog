import { Action } from 'redux';


const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const SET_CART_AMOUNT = 'SET_CART_AMOUNT';

type addToCartAction = Action<typeof ADD_TO_CART> & {
  id: string;
  quantity: number;
  product: Product;
};

type removeFromCartAction = Action<typeof REMOVE_FROM_CART> & {
  id: string;
};

type setCartAmount = Action<typeof SET_CART_AMOUNT> & {
  id: string;
  amount: number;
};

export const addToCart = (id: string, quantity: number, product: Product) => ({
  type: ADD_TO_CART,
  id,
  quantity,
  product,
});

export const removeFromCart = (id: string) => ({ type: REMOVE_FROM_CART, id });

export const setCartAmount = (id: string, amount: number) => ({
  type: SET_CART_AMOUNT,
  id,
  amount,
});

type PossibleActions = addToCartAction | removeFromCartAction | setCartAmount;

const reducer = (cart: Cart[] = [], action: PossibleActions) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [
        ...cart,
        {
          id: action.id,
          quantity: 1,
          product: action.product,
        },
      ];

    case REMOVE_FROM_CART:
      return cart.filter(product => product.id !== action.id);

    case SET_CART_AMOUNT:
      return cart.map(product => {
        if (product.id === action.id) {
          const result = product.quantity + action.amount;

          return {
            ...product,
            quantity: result === 0 ? 1 : result,
          };
        }

        return product;
      });

    default:
      return cart;
  }
};

export default reducer;
