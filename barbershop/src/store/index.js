import { createStore, applyMiddleware } from "redux";

import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./rootReducer";
import rootSaga from './rootSaga';

const SagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTRENSION__ && window.__REDUX_DEVTOOLS_EXTRENSION__()
? composeWithDevTools(applyMiddleware(SagaMiddleware))
: applyMiddleware(SagaMiddleware)
);

SagaMiddleware.run(rootSaga);

export default store;
