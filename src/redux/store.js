import { createStore, applyMiddleware } from 'redux';
import {persistStore} from 'redux-persist';
import { logger } from 'redux-logger';

// output object from reducers combiner
import rootReducer from './root-reducer';

// a middleware for logging
const middlewares = [logger];

//Here we create our store to pass it to the provider
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default {store, persistor};
