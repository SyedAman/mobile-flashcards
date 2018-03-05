import React, {Component} from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {connect} from 'react-redux';
import styled from 'styled-components';

import Card from './Card';
import Results from './Results';
import {clearAllLocalNotifications, setLocalQuizNotification} from '../utils';

class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCard: props.cards[0],
      isCardFacedUp: true,
      isCompleted: false,
      questionsCorrect: 0,
    };
  }

  handleCorrectAnswer = () => {
    this.setState(({questionsCorrect}) => ({
      questionsCorrect: questionsCorrect + 1,
    }));
    this.getNextCard();
  };

  handleIncorrectAnswer = () => {
    this.getNextCard();
  };

  resetQuizNotification = () => {
    clearAllLocalNotifications();
    setLocalQuizNotification();
  };

  getNextCard = () => {
    this.setState(({currentCard}) => {
      const {cards} = this.props;
      const cardIndex = cards.indexOf(currentCard);
      const isCompleted = cardIndex + 1 === cards.length;

      if (isCompleted) this.resetQuizNotification();

      return isCompleted
        ? {currentCard: null, isCompleted}
        : {
            currentCard: cards[cardIndex + 1],
            isCardFacedUp: true,
          };
    });
  };

  handleFlip = () => {
    this.setState({isCardFacedUp: !this.state.isCardFacedUp});
  };

  startOverQuiz = () => {
    this.setState({
      isCompleted: false,
      currentCard: this.props.cards[0],
      isCardFacedUp: true,
      questionsCorrect: 0,
    });
  };

  render() {
    const {cards, navigation} = this.props;
    const deckId = navigation.state.params;
    const {
      currentCard,
      isCardFacedUp,
      isCompleted,
      questionsCorrect,
    } = this.state;

    return (
      <TouchableWithoutFeedback onPress={() => this.handleFlip()}>
        {isCompleted ? (
          <Results
            questionsCorrect={questionsCorrect}
            questionCount={cards.length}
            onStartQuizOver={this.startOverQuiz}
            onDone={() => navigation.navigate('IndividualDeckPage', deckId)}
          />
        ) : (
          <Card
            currentCard={currentCard}
            onHandleFlip={this.handleFlip}
            onCorrectAnswer={this.handleCorrectAnswer}
            onIncorrectAnswer={this.handleIncorrectAnswer}
            cardCountText={`${cards.indexOf(currentCard) + 1}/${cards.length}`}
            isCardFacedUp={isCardFacedUp}
          />
        )}
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
