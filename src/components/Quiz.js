import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import styled from 'styled-components';

import Card from './Card';
import Container from './Container';
import Header3 from './Headers/Header3';
import GenericButton from './GenericButton';

const ContainerWithMargin = Container.extend`
  margin: 100px 0;
`;

const CorrectButton = GenericButton.extend`
  background-color: #67d424;
`;

const IncorrectButton = GenericButton.extend`
  background-color: #ec6418;
`;

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
    const {cards} = this.props;
    const {currentCard} = this.state;

    return (
      <ContainerWithMargin>
        <Header3>{`${cards.indexOf(currentCard) + 1}/${cards.length}`}</Header3>
        <Card card={this.state.currentCard} />

        <CorrectButton onPress={() => console.log('correct')}>
          <Text>Correct</Text>
        </CorrectButton>

        <IncorrectButton onPress={() => console.log('incorrect')}>
          <Text>Incorrect</Text>
        </IncorrectButton>
      </ContainerWithMargin>
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
