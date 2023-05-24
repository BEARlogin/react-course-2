import { call, put, takeLatest, takeEvery, all } from 'redux-saga/effects'

import SERVER from '../actions/server'
import { actions, ActionTypes } from '../actions/common'

function * fetchBooksWorker () {
    const response = yield call(SERVER.get, '/books')
    yield put(actions.fetchBooksFulFilled(response.data))
}

export function * fetchBooksWatcher () {
    yield takeLatest(ActionTypes.FETCH_BOOK_REQUEST, fetchBooksWorker)
}

export function * createBookWorker ({ payload: { book } }) {
    yield SERVER.post('/books', book)
    yield put(actions.fetchBooks())
}

export function * createBookWatcher () {
    yield takeEvery(ActionTypes.CREATE_BOOK_REQUEST, createBookWorker)
}

export function * removeBookWorker (act) {
    yield SERVER.delete('/books/' + act.payload.id)
    yield put(actions.fetchBooks())
}

export function * removeBookWatcher () {
    yield takeEvery(ActionTypes.REMOVE_BOOK_REQUEST, removeBookWorker)
}

export default function * booksRootSaga () {
    yield all([
        fetchBooksWatcher(),
        createBookWatcher(),
        removeBookWatcher()
    ])
}
