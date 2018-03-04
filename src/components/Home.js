import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import styled from 'styled-components';

import initialState from '../reducers/initialState';

import Container from './Container';

const DeckTouchableOpacity = styled(TouchableOpacity)`
  background-color: rgb(139, 164, 201);
  margin: 10px;
  justify-content: space-around;
  flex-direction: column;
`;

const CreateNewDeckTouchableOpacity = styled(TouchableOpacity)`
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
        <CreateNewDeckTouchableOpacity
          onPress={() => navigation.navigate('CreateNewDeckPage')}>
          <Text>+</Text>
        </CreateNewDeckTouchableOpacity>

        <Text>NashCards</Text>
        <Text>Decks</Text>

        {decks.map(deck => (
          <DeckTouchableOpacity
            onPress={() => navigation.navigate('IndividualDeckPage', deck.id)}
            title={deck.name}
            key={deck.id}>
            <Text>{deck.name}</Text>
            <Text>{`${deck.cardsById.length} cards`}</Text>
          </DeckTouchableOpacity>
        ))}
      </Container>
    );
  }
}

const mapStateToProps = ({decks}) => ({
  decks: Object.keys(decks.byId).map(deckId => decks.byId[deckId]),
});

export default connect(mapStateToProps)(Home);
