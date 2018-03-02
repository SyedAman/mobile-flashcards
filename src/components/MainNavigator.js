import React from 'react';
import { StackNavigator } from 'react-navigation';

import Home from '../containers/Home';
import Individual from './IndividualDeck';
import NewCard from './NewCard';
import Quiz from './Quiz';
import CreateNewDeck from './CreateNewDeck';

const MainNavigator = StackNavigator(
	{
		HomePage: {
			screen: Home,
		},
		IndividualDeckPage: {
			screen: IndividualDeck,
		},
		NewCardPage: {
			screen: NewCard,
		},
		QuizPage: {
			screen: Quiz,
		},
		CreateNewDeckPage: {
			screen: CreateNewDeck,
		},
	},
	{
		initialRouteName: 'HomePage',
		headerMode: 'none',
	},
);

export default MainNavigator;
