import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducers/reducer';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

export const store = createStore(reducer,
    composeWithDevTools(applyMiddleware(thunk)))
