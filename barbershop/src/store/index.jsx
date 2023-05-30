import{ configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';


import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
    devTools: typeof window === 'object' && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (store) => store,
  });      

sagaMiddleware.run(rootSaga)




export default store;