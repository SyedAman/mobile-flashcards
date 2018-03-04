import React, {Component} from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {connect} from 'react-redux';
import styled from 'styled-components';

import Card from './Card';

class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCard: props.cards[0],
      isCardFacedUp: true,
      isCompleted: false,
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

  handleFlip = () => {
    this.setState({isCardFacedUp: !this.state.isCardFacedUp});
  };

  render() {
    const {cards} = this.props;
    const {currentCard, isCardFacedUp} = this.state;

    return (
      <TouchableWithoutFeedback onPress={() => this.handleFlip()}>
        <Card
          currentCard={currentCard}
          onHandleFlip={this.handleFlip}
          onGetNextCard={this.getNextCard}
          cardCount={`${cards.indexOf(currentCard) + 1}/${cards.length}`}
          isCardFacedUp={isCardFacedUp}
        />
      </TouchableWithoutFeedback>
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
