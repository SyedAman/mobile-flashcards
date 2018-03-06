import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import styled from 'styled-components';

import {addCardToDeck} from '../actions';
import Container from '../components/Container';
import GenericButton from '../components/GenericButton';
import Header1 from '../components/Headers/Header1';
import TextInputField from '../components/TextInputField';

class NewCard extends Component {
  constructor() {
    super();

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
    this.props.navigation.navigate('IndividualDeckPage', deckId);
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
        <Header1>Add a Flashcard</Header1>

        <TextInputField
          onChangeText={newText => this.handleQuestionInput(newText)}
          placeholder="Question"
        />
        <TextInputField
          onChangeText={newText => this.handleAnswerInput(newText)}
          placeholder="Correct Answer"
        />

        <GenericButton onPress={this.handleSubmit}>
          <Text>Submit</Text>
        </GenericButton>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onAddCardToDeck: newCard => dispatch(addCardToDeck(newCard)),
});

export default connect(null, mapDispatchToProps)(NewCard);
