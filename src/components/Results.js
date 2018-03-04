import React, {Component} from 'react';
import {Text} from 'react-native';

import Header1 from './Headers/Header1';
import Container from './Container';
import GenericButton from './GenericButton';

const Score = Header1.extend`
  color: ${({percentCorrect}) =>
    percentCorrect >= 65 ? '#18ff7b' : '#ed122c'};
`;

class Results extends Component {
  render() {
    const {questionsCorrect, questionCount} = this.props;
    const percentCorrect = Math.round(questionsCorrect / questionCount * 100);

    return (
      <Container>
        <Header1>Quiz Completed!</Header1>

        <Score percentCorrect={percentCorrect}>
          {`You got ${percentCorrect}% of ${questionCount} correct`}
        </Score>

        <GenericButton>
          <Text>Start Quiz Over</Text>
        </GenericButton>

        <GenericButton>
          <Text>Done</Text>
        </GenericButton>
      </Container>
    );
  }
}

export default Results;
