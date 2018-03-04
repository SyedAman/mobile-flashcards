import React from 'react';
import {View, Text, Button} from 'react-native';
import styled from 'styled-components';

import Container from './Container';

const CardCount = styled.Text``;
const Question = styled.Text``;
const AnswerHeader = styled.Text``;
const CorrectButton = styled.Button``;
const IncorrectButton = styled.Button``;

const Card = () => (
  <Container>
    <CardCount>3/6</CardCount>
    <Question>Does React Native work with Android?</Question>
    <AnswerHeader>Answer</AnswerHeader>
    <CorrectButton title="Correct" />
    <IncorrectButton title="Incorrect" />
  </Container>
);

export default Card;
