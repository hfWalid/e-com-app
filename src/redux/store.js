import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

// output object from reducers combiner
import rootReducer from './root-reducer';

// a middleware for logging
const middlewares = [logger];

//Here we create our store to pass it to the provider
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
