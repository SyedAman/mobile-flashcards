import React from 'react';
import {Text} from 'react-native';

import Header1 from './Headers/Header1';
import Header3 from './Headers/Header3';
import CardContent from './CardContent';
import Container from './Container';
import GenericButton from './GenericButton';
import {springGreen, salmon} from '../utils/colors';

const ContainerWithMargin = Container.extend`
  margin: 100px 0;
`;

const CorrectButton = GenericButton.extend`
  background-color: ${springGreen};
`;

const IncorrectButton = GenericButton.extend`
  background-color: ${salmon};
`;

const Card = ({
  currentCard,
  onHandleFlip,
  onCorrectAnswer,
  onIncorrectAnswer,
  cardCountText,
  isCardFacedUp,
}) => (
  <ContainerWithMargin>
    <Header1>Quiz</Header1>

    <Header3>{cardCountText}</Header3>

    <CardContent
      card={currentCard}
      isCardFacedUp={isCardFacedUp}
      onHandleFlip={onHandleFlip}
    />

    <CorrectButton onPress={() => onCorrectAnswer()}>
      <Text>Correct</Text>
    </CorrectButton>

    <IncorrectButton onPress={() => onIncorrectAnswer()}>
      <Text>Incorrect</Text>
    </IncorrectButton>
  </ContainerWithMargin>
);

export default Card;
