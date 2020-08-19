import CartActionTypes from "../types/cart.types";

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM_TO_CART,
  payload: item,
});
