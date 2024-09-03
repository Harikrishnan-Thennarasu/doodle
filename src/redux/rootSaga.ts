
import { all } from 'redux-saga/effects';
import watchCartActions from './sagas/cartSagas';

export default function* rootSaga() {
    yield all([
        watchCartActions(),
    ]);
}
