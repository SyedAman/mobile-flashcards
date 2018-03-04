import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import styled from 'styled-components';

import Container from './Container';

const CardCount = styled.Text``;
const Header = styled.Text``;
const Subheader = styled.Text``;
const CorrectTouchableOpacity = styled.TouchableOpacity``;
const IncorrectTouchableOpacity = styled.TouchableOpacity``;

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
          <CorrectTouchableOpacity title="Correct" color="#00ff00" />
          <IncorrectTouchableOpacity title="Incorrect" color="#ff4500" />
        </Container>
      </TouchableWithoutFeedback>
    );
  }
}

export default Card;
