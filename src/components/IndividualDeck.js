import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import styled from 'styled-components';
import {connect} from 'react-redux';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
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

        <Button
          onPress={() => navigation.navigate('NewCardPage', deck.id)}
          title="Add Flashcard"
        />
        <Button
          onPress={() => navigation.navigate('QuizPage', {deck})}
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
