import React, {Component} from 'react';
import {Text, TouchableWithoutFeedback} from 'react-native';
import styled from 'styled-components';

import Container from './Container';
import GenericButton from './GenericButton';
import Header1 from './Headers/Header1';
import Header2 from './Headers/Header2';
import Header3 from './Headers/Header3';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isCardFacedUp: true,
    };
  }

  handleFlip = () => {
    this.setState({isCardFacedUp: !this.state.isCardFacedUp});
  };

  render() {
    const {card} = this.props;

    const Front = (
      <Container>
        <Header1>{card.question}</Header1>

        <GenericButton onPress={() => this.handleFlip()}>
          <Text>Show Answer</Text>
        </GenericButton>
      </Container>
    );

    const Back = (
      <Container>
        <Header1>{card.answer}</Header1>

        <GenericButton onPress={() => this.handleFlip()}>
          <Text>Show Question</Text>
        </GenericButton>
      </Container>
    );

    return (
      <TouchableWithoutFeedback onPress={() => this.handleFlip()}>
        {this.state.isCardFacedUp ? Front : Back}
      </TouchableWithoutFeedback>
    );
  }
}

export default Card;
