import { call, put, takeLatest, all } from 'redux-saga/effects'

import SERVER from '../actions/server'
import { actions, ActionTypes } from '../actions/common'

function * fetchSelectionsWorker () {
    const response = yield call(SERVER.get, '/selections')
    yield put({ type: ActionTypes.FETCH_SELECTIONS_FULFILLED, payload: response?.data || [] })
}

export function * selectionsWatcher () {
    yield takeLatest(ActionTypes.FETCH_SELECTIONS_REQUEST, fetchSelectionsWorker)
}

function * addBookToSelectionWorker ({ payload: { bookId, selectionId } }) {
    yield call(SERVER.post, `/selections/${selectionId}/books`, [bookId])
    yield put(actions.fetchSelections())
}

export function * addBookToSelectionWatcher () {
    yield takeLatest(ActionTypes.ADD_BOOK_TO_SELECTION_REQUEST, addBookToSelectionWorker)
}

function * createSelectionWorker ({ payload }) {
    yield call(SERVER.post, '/selections', payload)
    yield put(actions.fetchSelections())
}

export function * createSelectionWatcher () {
    yield takeLatest(ActionTypes.CREATE_SELECTION_REQUEST, createSelectionWorker)
}

function * removeSelectionWorker ({ payload }) {
    yield call(SERVER.delete, '/selections/' + payload)
    yield put(actions.fetchSelections())
}

export function * removeSelectionWatcher () {
    yield takeLatest(ActionTypes.REMOVE_SELECTION_REQUEST, removeSelectionWorker)
}

function * removeBookFromSelectionWorker ({ payload: { bookId, selectionId } }) {
    yield call(SERVER.delete, '/selections/' + selectionId + '/books/' + bookId)
    yield put(actions.fetchSelections())
}

export function * removeBookFromSelectionWatcher () {
    yield takeLatest(ActionTypes.REMOVE_BOOK_FROM_SELECTION, removeBookFromSelectionWorker)
}

export default function * selectionsRootSaga () {
    yield all([
        selectionsWatcher(),
        addBookToSelectionWatcher(),
        createSelectionWatcher(),
        removeSelectionWatcher(),
        removeBookFromSelectionWatcher()
    ])
}
