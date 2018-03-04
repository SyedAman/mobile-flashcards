import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {connect} from 'react-redux';

import Container from './Container';

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

        <TouchableOpacity
          onPress={() => navigation.navigate('NewCardPage', deck.id)}
          title="Add Flashcard"
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('QuizPage', deck.id)}
          title="Start Quiz"
        />
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
