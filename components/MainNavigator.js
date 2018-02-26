import React from 'react';
import { StackNavigator } from 'react-navigation';

import Home from './Home';

const MainNavigator = StackNavigator(
	{
		HomePage: {
			screen: Home,
		},
	},
	{
		initialRouteName: 'HomePage',
		headerMode: 'none',
	},
);

export default MainNavigator;
