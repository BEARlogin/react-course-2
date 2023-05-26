import { createStore, applyMiddleware } from 'redux'
import { all } from 'redux-saga/effects'
import { reducer } from './reducers/reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import selectionsRootSaga from './sagas/selections'
import booksRootSaga from './sagas/books'
import { map, filter } from 'rxjs'
import { combineEpics, createEpicMiddleware } from 'redux-observable'
import { ActionTypes } from './actions/common'
import { fetchBooksEpic } from './epics/books'

export default function * rootSaga () {
    yield all([
        // booksRootSaga(),
        selectionsRootSaga()
    ])
}

export const loggerEpic = (action$) => action$.pipe(
    filter((action) => action.type !== ActionTypes.LOG_ACTION),
    map((action) => ({
        type: ActionTypes.LOG_ACTION,
        payload: action
    }))
)

export const rootEpic = combineEpics(
    loggerEpic,
    fetchBooksEpic
)

const epicMiddleware = createEpicMiddleware()

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware, epicMiddleware)))

sagaMiddleware.run(rootSaga)
epicMiddleware.run(rootEpic)
