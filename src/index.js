import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers/reducer';
import { composeWithDevTools } from 'redux-devtools-extension'
import "bootstrap/dist/css/bootstrap.min.css"
import thunk from 'redux-thunk'
import {injectStoreToServer} from "./actions/server";

const store = createStore(reducer,
    composeWithDevTools(applyMiddleware(thunk)))

injectStoreToServer(store)

const container = document.getElementById('root');
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);