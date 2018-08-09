import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './_reducers';
import sagas from './_sagas';

export const history = createHistory();

const sagaMiddleware = createSagaMiddleware();

const initialState = {};
const middleware = [
  routerMiddleware(history),
  sagaMiddleware
];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware),
);

sagaMiddleware.run(sagas);

export default store;
