import React from 'react';
import {ActivityIndicator} from 'react-native';

import Container from './Container';
import {turquoise} from '../utils/colors';

const Loading = () => (
  <Container>
    <ActivityIndicator size="large" color={turquoise} />
  </Container>
);

export default Loading;
