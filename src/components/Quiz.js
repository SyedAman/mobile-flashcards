import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import styled from 'styled-components';

import Card from './Card';

class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCard: props.cards[0],
    };
  }

  getNextCard = () => {
    this.setState(({currentCard}) => {
      const {cards} = this.props;

      return {
        currentCard: cards[cards.indexOf(currentCard) + 1],
      };
    });
  };

  render() {
    return <Card card={this.state.currentCard} />;
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
