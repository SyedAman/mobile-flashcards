import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';
import {connect} from 'react-redux';
import uuid from 'react-native-uuid';

import {createDeck} from '../actions';
import Container from '../components/Container';
import GenericButton from '../components/GenericButton';
import Header2 from '../components/Headers/Header2';
import TextInputField from '../components/TextInputField';

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
    const newDeckData = {
      name: this.state.newDeckName,
      id: uuid.v1(),
    };
    this.props.onSubmit(newDeckData);

    this.props.navigation.navigate('IndividualDeckPage', newDeckData.id);
  };

  render() {
    return (
      <Container>
        <Header2>What do you want to call your new deck?</Header2>

        <TextInputField
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
