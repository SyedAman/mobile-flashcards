import React from 'react';
import {Text} from 'react-native';

import Header1 from './Headers/Header1';
import Container from './Container';
import GenericButton from './GenericButton';
import {springGreen, salmon} from '../utils/colors';

const Score = Header1.extend`
  color: ${({percentCorrect}) => (percentCorrect >= 65 ? springGreen : salmon)};
`;

const Results = ({
  questionsCorrect,
  questionCount,
  onStartQuizOver,
  onDone,
}) => {
  percentCorrect = Math.round(questionsCorrect / questionCount * 100);

  return (
    <Container>
      <Header1>Quiz Completed!</Header1>

      <Score percentCorrect={percentCorrect}>
        {`You got ${percentCorrect}% of ${questionCount} correct`}
      </Score>

      <GenericButton onPress={() => onStartQuizOver()}>
        <Text>Start Quiz Over</Text>
      </GenericButton>

      <GenericButton onPress={() => onDone()}>
        <Text>Done</Text>
      </GenericButton>
    </Container>
  );
};

export default Results;
