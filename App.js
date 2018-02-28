import React from 'react';
import { Provider } from 'react-redux';

import MainNavigator from './src/components/MainNavigator';
import store from './src/store';

export default () => (
	<Provider store={store}>
		<MainNavigator />
	</Provider>
);
