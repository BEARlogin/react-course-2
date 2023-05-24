import { call, put, takeLatest } from 'redux-saga/effects'

import SERVER from '../actions/server'

function * fetchBooksSaga () {
    const response = yield call(SERVER.get, '/books')
    yield put({ type: 'FETCH_BOOKS_FULFILLED', payload: { books: response.data } })
}

export function * booksSaga () {
    yield takeLatest('FETCH_BOOK_REQUEST', fetchBooksSaga)
}
