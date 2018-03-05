import React from 'react';
import {StackNavigator} from 'react-navigation';

import Home from './Home';
import IndividualDeck from './IndividualDeck';
import NewCard from '../containers/NewCard';
import Quiz from './Quiz';
import CreateNewDeck from '../containers/CreateNewDeck';

const MainNavigator = StackNavigator(
  {
    HomePage: {
      screen: Home,
      navigationOptions: {title: 'Home'},
    },
    IndividualDeckPage: {
      screen: IndividualDeck,
      navigationOptions: {title: 'Individual Deck'},
    },
    NewCardPage: {
      screen: NewCard,
      navigationOptions: {title: 'New Flashcard'},
    },
    QuizPage: {
      screen: Quiz,
      navigationOptions: {title: 'Quiz'},
    },
    CreateNewDeckPage: {
      screen: CreateNewDeck,
      navigationOptions: {title: 'New Deck'},
    },
  },
  {
    initialRouteName: 'HomePage',
  }
);

export default MainNavigator;
