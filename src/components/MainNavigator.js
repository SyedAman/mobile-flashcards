import React from 'react';
import {StackNavigator} from 'react-navigation';

import Home from '../containers/Home';
import IndividualDeck from './IndividualDeck';
import NewCard from '../containers/NewCard';
import Quiz from './Quiz';
import CreateNewDeck from '../containers/CreateNewDeck';

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
  }
);

export default MainNavigator;
