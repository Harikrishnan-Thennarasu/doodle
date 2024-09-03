import {
    ADD_TO_CART_REQUEST,
    REMOVE_FROM_CART_REQUEST,
} from '../actionTypes';

export const addToCartRequest = (item: any) => ({
    type: ADD_TO_CART_REQUEST,
    payload: item,
});

export const removeFromCartRequest = (itemId: any) => ({
    type: REMOVE_FROM_CART_REQUEST,
    payload: itemId,
});