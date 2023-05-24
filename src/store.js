import { createStore, applyMiddleware } from 'redux'
import { all } from 'redux-saga/effects'
import { reducer } from './reducers/reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import selectionsRootSaga from './sagas/selections'
import booksRootSaga from './sagas/books'

export default function * rootSaga () {
    yield all([
        booksRootSaga(),
        selectionsRootSaga()
    ])
}

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)
