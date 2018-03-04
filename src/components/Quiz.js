import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import styled from 'styled-components';

import Card from './Card';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

class Quiz extends Component {
  render() {
    return (
      <Container>
        <Card />
      </Container>
    );
  }
}

const mapStateToProps = ({cards}, ownProps) => {
  const deckId = ownProps.navigation.state.params;
  const arrayOfCards = Object.keys(cards.byId)
    .map(cardId => cards.byId[cardId])
    .filter(card => card.deckId === deckId);

  return {
    cards: arrayOfCards,
  };
};

export default connect(mapStateToProps)(Quiz);
