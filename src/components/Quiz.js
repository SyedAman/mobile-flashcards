import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import styled from 'styled-components';

import Card from './Card';

class Quiz extends Component {
  render() {
    return <Card />;
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
