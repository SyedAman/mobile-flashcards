import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';
import {connect} from 'react-redux';

import Container from './Container';
import GenericButton from './GenericButton';
import Header1 from './Headers/Header1';
import Header3 from './Headers/Header3';
import {turquoise, lightPink} from '../utils/colors';

const AddFlashcardButton = GenericButton.extend`
  background-color: ${turquoise};
`;

const StartQuizButton = GenericButton.extend`
  background-color: ${lightPink};
`;

class IndividualDeck extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {navigation} = this.props;
    const deck = this.props.deck;
    const amountOfCards = deck.cardsById.length;
    return (
      <Container>
        <Header1>{deck.name}</Header1>
        <Header3>
          {`${amountOfCards} card${amountOfCards === 1 ? '' : 's'}`}
        </Header3>

        <AddFlashcardButton
          onPress={() => navigation.navigate('NewCardPage', deck.id)}>
          <Text>Add Flashcard</Text>
        </AddFlashcardButton>

        <StartQuizButton
          onPress={() => navigation.navigate('QuizPage', deck.id)}>
          <Text>Start Quiz</Text>
        </StartQuizButton>
      </Container>
    );
  }
}

const mapStateToProps = ({decks}, ownProps) => {
  const deckId = ownProps.navigation.state.params;

  return {
    deck: decks.byId[deckId],
  };
};

export default connect(mapStateToProps)(IndividualDeck);
