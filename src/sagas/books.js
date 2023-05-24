import { call, put, takeEvery, all, take, fork, cancel, race, delay, takeLatest } from 'redux-saga/effects'

import SERVER from '../actions/server'
import { actions, ActionTypes } from '../actions/common'

const REQUEST_TIMEOUT = 12000

function * fetchBooksWorker () {
    yield put(actions.fetchingBooks(true))
    const [response, timeout] = yield race([
        call(SERVER.get, '/books'),
        delay(REQUEST_TIMEOUT, true),
        take(ActionTypes.CANCEL_FETCH_BOOK)
    ])

    if (response) {
        yield put(actions.fetchBooksFulFilled(response.data))
    }
    if (timeout) {
        yield put(actions.requestIsTimedOut(true))
    }

    yield put(actions.fetchingBooks(false))
}

export function * fetchBooksWatcher () {
    yield takeLatest(ActionTypes.FETCH_BOOK_REQUEST, fetchBooksWorker)
    // let activeWorker = null
    // while (yield take(ActionTypes.FETCH_BOOK_REQUEST)) {
    //     if (activeWorker !== null) {
    //         yield cancel(activeWorker)
    //     }
    //     activeWorker = yield fork(fetchBooksWorker)
    // }
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
