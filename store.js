import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './statemanagement/rootSaga';


import rootReducer from './statemanagement/rootReducer'
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = createStore(
    rootReducer,
   compose(applyMiddleware(...middleware))
);
sagaMiddleware.run(rootSaga);
