import React from 'react';
import styled from 'styled-components';
import {TextInput} from 'react-native';

import {fadedBlack, orange} from '../utils/colors';

const StyledTextInput = styled(TextInput)`
  width: 200px;
  margin: 10px;
`;

const TextInputField = props => (
  <StyledTextInput
    placeholderTextColor={fadedBlack}
    underlineColorAndroid={orange}
    {...props}
  />
);

export default TextInputField;
