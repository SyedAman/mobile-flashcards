import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {connect} from 'react-redux';

import {createDeck} from '../actions';
import Container from '../components/Container';

const Header = styled.Text``;

const SubmitTouchableOpacity = styled.TouchableOpacity`
  border-radius: 25px;
  width: 100px;
  height: 100px;
`;

const NewDeckNameTextField = styled.TextInput``;

class CreateNewDeck extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newDeckName: '',
    };
  }

  handleNewDeckNameInput = input => {
    this.setState({newDeckName: input});
  };

  handleSubmit = () => {
    this.props.onSubmit(this.state.newDeckName);
    this.props.navigation.navigate('HomePage');
  };

  render() {
    return (
      <Container>
        <Header>What do you want to call your new deck?</Header>

        <NewDeckNameTextField
          onChangeText={newText => this.handleNewDeckNameInput(newText)}
          placeholder="New deck name..."
        />

        <SubmitTouchableOpacity onPress={() => this.handleSubmit()}>
          <Text>Submit</Text>
        </SubmitTouchableOpacity>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: newDeckName => {
    dispatch(createDeck(newDeckName));
  },
});

export default connect(null, mapDispatchToProps)(CreateNewDeck);
