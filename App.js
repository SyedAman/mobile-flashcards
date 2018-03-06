import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import MainNavigator from './src/components/MainNavigator';
import {store, persistor} from './src/store';
import Loading from './src/components/Loading';

export default () => (
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <MainNavigator />
    </PersistGate>
  </Provider>
);
