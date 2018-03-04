import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import styled from 'styled-components';

import {addCardToDeck} from '../actions';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const SubmitButton = styled.TouchableOpacity``;

class NewCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardQuestion: '',
      cardAnswer: '',
    };
  }

  handleSubmit = () => {
    const deckId = this.props.navigation.state.params;

    const newCardData = {
      deckId,
      question: this.state.cardQuestion,
      answer: this.state.cardAnswer,
    };

    // validate form
    if (!newCardData.deckId && !newCardData.question && !newCardData.answer) {
      return;
    }

    this.props.onAddCardToDeck(newCardData);
    this.props.navigation.navigate('IndividualDeckPage');
  };

  handleQuestionInput = newText => {
    this.setState({cardQuestion: newText});
  };

  handleAnswerInput = newText => {
    this.setState({cardAnswer: newText});
  };

  render() {
    return (
      <Container>
        <TextInput
          onChangeText={newText => this.handleQuestionInput(newText)}
          placeholder="Question"
        />
        <TextInput
          onChangeText={newText => this.handleAnswerInput(newText)}
          placeholder="Correct Answer"
        />
        <SubmitButton onPress={this.handleSubmit}>
          <Text>Submit</Text>
        </SubmitButton>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onAddCardToDeck: newCard => dispatch(addCardToDeck(newCard)),
});

export default connect(null, mapDispatchToProps)(NewCard);
