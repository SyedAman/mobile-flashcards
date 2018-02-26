import React from 'react';
import { StackNavigator } from 'react-navigation';

import Home from './Home';
import Deck from './Deck';
import NewCard from './NewCard';
import Quiz from './Quiz';

const MainNavigator = StackNavigator(
	{
		HomePage: {
			screen: Home,
		},
		IndividualDeckPage: {
			screen: Deck,
		},
		NewCardPage: {
			screen: NewCard,
		},
		QuizPage: {
			screen: Quiz,
		},
	},
	{
		initialRouteName: 'HomePage',
		headerMode: 'none',
	},
);

export default MainNavigator;
