import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import styled from 'styled-components';
import {connect} from 'react-redux';

import {createDeck} from '../actions';
import Container from '../components/Container';
import GenericButton from '../components/GenericButton';
import Header2 from '../components/Headers/Header2';

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
        <Header2>What do you want to call your new deck?</Header2>

        <NewDeckNameTextField
          onChangeText={newText => this.handleNewDeckNameInput(newText)}
          placeholder="New deck name..."
        />

        <GenericButton onPress={() => this.handleSubmit()}>
          <Text>Submit</Text>
        </GenericButton>
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
