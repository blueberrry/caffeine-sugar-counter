import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import storage from 'redux-persist/es/storage';
import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas/rootSaga';
import App from './App';

const middlewares = [];
const enhancers = [];

const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware, logger);
enhancers.push(applyMiddleware(...middlewares));

const store = createStore(rootReducer, compose(...enhancers));
const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Root;
