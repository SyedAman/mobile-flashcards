import React from 'react';
import {Text} from 'react-native';

import Header1 from './Headers/Header1';
import Header3 from './Headers/Header3';
import CardContent from './CardContent';
import Container from './Container';
import GenericButton from './GenericButton';

const ContainerWithMargin = Container.extend`
  margin: 100px 0;
`;

const CorrectButton = GenericButton.extend`
  background-color: #67d424;
`;

const IncorrectButton = GenericButton.extend`
  background-color: #ec6418;
`;

const Card = ({
  currentCard,
  onHandleFlip,
  onGetNextCard,
  cardCount,
  isCardFacedUp,
}) => (
  <ContainerWithMargin>
    <Header1>Quiz</Header1>

    <Header3>{cardCount}</Header3>

    <CardContent
      card={currentCard}
      isCardFacedUp={isCardFacedUp}
      onHandleFlip={onHandleFlip}
    />

    <CorrectButton onPress={() => onGetNextCard()}>
      <Text>Correct</Text>
    </CorrectButton>

    <IncorrectButton onPress={() => onGetNextCard()}>
      <Text>Incorrect</Text>
    </IncorrectButton>
  </ContainerWithMargin>
);

export default Card;
