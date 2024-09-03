import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from '../actionTypes';

const initialState = {
  items: [
    { id: '1', name: 'Rain Coats', color: 'BLUE', size: 'M', price: 450, quantity: 1, imageUrl: 'https://m.media-amazon.com/images/I/51UQzMhobRL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: '2', name: 'Shirt Blue', color: 'BLUE', size: 'M', price: 450, quantity: 1, imageUrl: 'https://m.media-amazon.com/images/I/41VvQ1WV1SL._SY550_.jpg' },
    { id: '3', name: 'T Shirt', color: 'YL', size: 'M', price: 450, quantity: 1, imageUrl: 'https://m.media-amazon.com/images/I/71eUwDk8z+L._SY879_.jpg' },
  ],
  error: null,
};

export default function cartReducer(state = initialState, action: any) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
        )
      }
    default:
      return state;
  }
}
