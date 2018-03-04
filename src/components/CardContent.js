import React, {Component} from 'react';
import {Text} from 'react-native';

import Container from './Container';
import GenericButton from './GenericButton';
import Header1 from './Headers/Header1';

class CardContent extends Component {
  render() {
    const {card, isCardFacedUp, onHandleFlip} = this.props;

    const Front = (
      <Container>
        <Header1>{card.question}</Header1>

        <GenericButton onPress={() => onHandleFlip()}>
          <Text>Show Answer</Text>
        </GenericButton>
      </Container>
    );

    const Back = (
      <Container>
        <Header1>{card.answer}</Header1>

        <GenericButton onPress={() => onHandleFlip()}>
          <Text>Show Question</Text>
        </GenericButton>
      </Container>
    );

    return isCardFacedUp ? Front : Back;
  }
}

export default CardContent;
