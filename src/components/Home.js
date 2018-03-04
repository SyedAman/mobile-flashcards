import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import styled from 'styled-components';

import initialState from '../reducers/initialState';

import Container from './Container';

const DeckButton = styled(TouchableOpacity)`
  background-color: rgb(139, 164, 201);
  margin: 10px;
  justify-content: space-around;
  flex-direction: column;
`;

const CreateNewDeckButton = styled(TouchableOpacity)`
  background-color: rgb(39, 200, 89);
  width: 100px;
  border-radius: 50px;
`;

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {navigation, decks} = this.props;

    return (
      <Container>
        <CreateNewDeckButton
          onPress={() => navigation.navigate('CreateNewDeckPage')}>
          <Text>+</Text>
        </CreateNewDeckButton>

        <Text>NashCards</Text>
        <Text>Decks</Text>

        {decks.map(deck => (
          <DeckButton
            onPress={() => navigation.navigate('IndividualDeckPage', deck.id)}
            title={deck.name}
            key={deck.id}>
            <Text>{deck.name}</Text>
            <Text>{`${deck.cardsById.length} cards`}</Text>
          </DeckButton>
        ))}
      </Container>
    );
  }
}

const mapStateToProps = ({decks}) => ({
  decks: Object.keys(decks.byId).map(deckId => decks.byId[deckId]),
});

export default connect(mapStateToProps)(Home);