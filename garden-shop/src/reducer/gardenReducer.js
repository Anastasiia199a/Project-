export const initialState = {
  cart: [],
  totalPrice: 0,
  phone: '',
};

const ADD_TO_CART = '[CART] ADD TO CART';
const DELETE_FROM_CART = '[CART] DELETE FROM CART';
const INCREMENT_COUNT = '[CART] INCREMENT COUNT';
const DECREMENT_COUNT = '[CART] DECREMENT COUNT';
const SET_COUNT = '[CART] SET COUNT';
const SAVE_NUMBER = '[CART] SAVE PHONE NUMBER';
const CLEAR_CART = '[CART] CLEAR CART';

export const addToCart = (instrument) => ({
  type: ADD_TO_CART,
  payload: { instrument },
});

export const deleteFromCart = (instrumentId) => ({
  type: DELETE_FROM_CART,
  payload: { instrumentId },
});

export const incrementCount = (instrumentId) => ({
  type: INCREMENT_COUNT,
  payload: { instrumentId },
});

export const decrementCount = (instrumentId) => ({
  type: DECREMENT_COUNT,
  payload: { instrumentId },
});

export const setCount = (count) => ({
  type: SET_COUNT,
  payload: { count },
});

export const savePhoneNumber = (number) => ({
  type: SAVE_NUMBER,
  payload: { number },
});

export const clearCart = () => ({
  type: CLEAR_CART,
});

export const gardenReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TO_CART: {
      const product = state.cart.find(
        (cartItem) => cartItem.id === action.payload.instrument.id
      );
      if (product) {
        const cart = state.cart.map((cartItem) =>
          cartItem.id === action.payload.instrument.id
            ? {
                ...cartItem,
                count: ++cartItem.count,
              }
            : cartItem
        );
        return {
          ...state,
          cart,
          totalPrice: calculateTotalPrice(cart),
        };
      } else {
        const cart = [
          ...state.cart,
          {
            ...action.payload.instrument,
            count: 1,
          },
        ];
        return {
          ...state,
          cart,
          totalPrice: calculateTotalPrice(cart),
        };
      }
    }
    case DELETE_FROM_CART: {
      const cart = state.cart.filter(
        (cartItem) => cartItem.id !== action.payload.instrumentId
      );
      return {
        ...state,
        cart,
        totalPrice: calculateTotalPrice(cart),
      };
    }
    case INCREMENT_COUNT: {
      const cart = state.cart.map((cartItem) =>
        cartItem.id === action.payload.instrumentId
          ? {
              ...cartItem,
              count: ++cartItem.count,
            }
          : cartItem
      );
      return {
        ...state,
        cart,
        totalPrice: calculateTotalPrice(cart),
      };
    }
    case DECREMENT_COUNT: {
      const cart = state.cart
        .map((cartItem) =>
          cartItem.id === action.payload.instrumentId
            ? {
                ...cartItem,
                count: --cartItem.count,
              }
            : cartItem
        )
        .filter((cartItem) => cartItem.count);

      return {
        ...state,
        cart,
        totalPrice: calculateTotalPrice(cart),
      };
    }
    case SET_COUNT: {
      const cart = state.cart
        .map((cartItem) =>
          cartItem.id === action.payload.instrumentId
            ? {
                ...cartItem,
                count: action.payload.count,
              }
            : cartItem
        )
        .filter((cartItem) => cartItem.count);
      return {
        ...state,
        cart,
        totalPrice: calculateTotalPrice(cart),
      };
    }
    case SAVE_NUMBER: {
      return {
        ...state,
        phone: action.payload.number,
      };
    }
    case CLEAR_CART: {
      return {
        ...state,
        cart: [],
      };
    }
    default:
      return state;
  }
};

function calculateTotalPrice(cart) {
  return cart.reduce(
    (acc, cartItem) => acc + cartItem.count * cartItem.newPrice,
    0
  );
}
