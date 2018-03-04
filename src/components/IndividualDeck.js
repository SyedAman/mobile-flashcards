import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';
import {connect} from 'react-redux';

import Container from './Container';
import GenericButton from './GenericButton';

const AddFlashcardButton = GenericButton.extend`
  background-color: #329fcf;
`;

const StartQuizButton = GenericButton.extend`
  background-color: #e588e7;
`;

class IndividualDeck extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {navigation} = this.props;
    const deck = this.props.deck;

    return (
      <Container>
        <Text>{deck.name}</Text>
        <Text>{`${deck.cardsById.length} cards`}</Text>

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
