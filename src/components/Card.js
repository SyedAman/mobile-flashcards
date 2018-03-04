import React, {Component} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import styled from 'styled-components';

import Container from './Container';
import GenericButton from './GenericButton';

const CardCount = styled.Text``;
const Header = styled.Text``;
const Subheader = styled.Text``;
const CorrectButton = GenericButton.extend`
  background-color: #67d424;
`;
const IncorrectButton = GenericButton.extend`
  background-color: #ec6418;
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

    const Front = (
      <View>
        <Header>{card.question}</Header>
        <Subheader>Answer</Subheader>
      </View>
    );

    const Back = (
      <View>
        <Header>{card.answer}</Header>
        <Subheader>Question</Subheader>
      </View>
    );

    return (
      <TouchableWithoutFeedback onPress={() => this.handleFlip()}>
        <Container>
          <CardCount>3/6</CardCount>

          {this.state.isCardFacedUp ? Front : Back}

          <CorrectButton onPress={() => console.log('correct')}>
            <Text>Correct</Text>
          </CorrectButton>

          <IncorrectButton onPress={() => console.log('incorrect')}>
            <Text>Incorrect</Text>
          </IncorrectButton>
        </Container>
      </TouchableWithoutFeedback>
    );
  }
}

export default Card;
