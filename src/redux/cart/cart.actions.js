import CartActionTypes from './cart.types';
const { TOGGLE_CART_IS_HIDDEN, ADD_ITEM } = CartActionTypes;

export const toggleCartVisibility = () => ({
  type: TOGGLE_CART_IS_HIDDEN,
  payload: null,
});

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});