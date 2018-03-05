import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {composeWithDevTools} from 'remote-redux-devtools';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from '../reducers';

// log actions
const loggerMiddleware = createLogger();

// define configuration for synchronizing async storage with redux store
const persistAsyncStorageConfig = {
  key: 'UdaciCards:Decks',
  storage,
};

// synchronize reducers with async storage to always maintain the same state
const persistedReducer = persistReducer(persistAsyncStorageConfig, rootReducer);
export let store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware))
);
export let persistor = persistStore(store);
