import {
  ADD_TO_CART,
  GET_CART,
  UPDATE_CART,
  DELETE_FROM_CART,
  INCERATE_QUANTITY,
  DECORATE_QUANTITY,
} from "./cart.type";

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case DELETE_FROM_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case GET_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case INCERATE_QUANTITY:
      return {
        ...state,
        cart: action.payload,
      };
    case DECORATE_QUANTITY:
      return {
        ...state,
        cart: action.payload,
      };
      case UPDATE_CART:
        return {
          ...state,
          cart: action.payload,
        };

    default: {
      return {
        ...state,
      };
    }
  }
};
export default cartReducer;
