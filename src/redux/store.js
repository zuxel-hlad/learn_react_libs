import { createStore, compose, applyMiddleware } from 'redux';
import { createReduxHistory, routerMiddleware } from './reducers/index';
import rootSaga from './sagas';
import createSagaMiddleware from '@redux-saga/core';
import reducer from './reducers/index';

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;
const sagaMiddleware = createSagaMiddleware();

const configureStore = preloadedState =>
    createStore(
        reducer,
        preloadedState,
        composeEnhancers(applyMiddleware(sagaMiddleware, routerMiddleware))
    );

const store = configureStore({});
sagaMiddleware.run(rootSaga);

export const history = createReduxHistory(store);
export default store;
