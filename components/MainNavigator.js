import React from 'react';
import { StackNavigator } from 'react-navigation';

import Home from './Home';

const MainNavigator = StackNavigator({
	Home: {
		screen: Home,
	},
});

export default MainNavigator;
