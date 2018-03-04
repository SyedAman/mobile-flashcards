import React from 'react';
import styled from 'styled-components';
import {TextInput} from 'react-native';

const StyledTextInput = styled(TextInput)`
  width: 200px;
  margin: 10px;
`;

const TextInputField = props => (
  <StyledTextInput
    placeholderTextColor={'rgba(0, 0, 0, 0.4)'}
    underlineColorAndroid={'#e99310'}
    {...props}
  />
);

export default TextInputField;
