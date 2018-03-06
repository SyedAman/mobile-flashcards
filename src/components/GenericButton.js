import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components';

import {darkTurquoise} from '../utils/colors';

const GenericButton = styled.TouchableOpacity`
  background-color: ${darkTurquoise};
  padding: 10px;
  margin: 10px;
  border-radius: 50px;
`;

export default GenericButton;
