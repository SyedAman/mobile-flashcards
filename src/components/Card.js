import React, {Component} from 'react';
import {Text, TouchableWithoutFeedback} from 'react-native';
import styled from 'styled-components';

import Container from './Container';
import GenericButton from './GenericButton';
import Header1 from './Headers/Header1';
import Header2 from './Headers/Header2';
import Header3 from './Headers/Header3';

const CorrectButton = GenericButton.extend`
  background-color: #67d424;
`;

const IncorrectButton = GenericButton.extend`
  background-color: #ec6418;
`;

const ContainerWithMargin = Container.extend`
  margin: 100px 0;
`;

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

    const Front = <Header1>{card.question}</Header1>;

    const Back = <Header1>{card.answer}</Header1>;

    return (
      <TouchableWithoutFeedback onPress={() => this.handleFlip()}>
        <ContainerWithMargin>
          <Header3>3/6</Header3>

          {this.state.isCardFacedUp ? Front : Back}

          <CorrectButton onPress={() => console.log('correct')}>
            <Text>Correct</Text>
          </CorrectButton>

          <IncorrectButton onPress={() => console.log('incorrect')}>
            <Text>Incorrect</Text>
          </IncorrectButton>
        </ContainerWithMargin>
      </TouchableWithoutFeedback>
    );
  }
}

export default Card;
