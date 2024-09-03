import { call, put, takeEvery } from 'redux-saga/effects';
import {
    ADD_TO_CART_REQUEST,
    ADD_TO_CART,
    CART_UPDATE_FAILURE,
    REMOVE_FROM_CART_REQUEST,
    REMOVE_FROM_CART,
} from '../actionTypes';


function* addToCart(action: any) {
    try {
        const itemId = action.payload;
        yield put({ type: ADD_TO_CART, payload: itemId });
    } catch (error: any) {
        yield put({ type: CART_UPDATE_FAILURE, error: error.message });
    }
}

function* removeFromCart(action: any) {
    try {
        const itemId = action.payload;
        yield put({ type: REMOVE_FROM_CART, payload: itemId });
    } catch (error: any) {
        yield put({ type: CART_UPDATE_FAILURE, error: error.message });
    }
}

function* watchCartActions() {
    yield takeEvery(ADD_TO_CART_REQUEST, addToCart);
    yield takeEvery(REMOVE_FROM_CART_REQUEST, removeFromCart);
}

export default watchCartActions;
