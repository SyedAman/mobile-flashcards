import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import styled from 'styled-components';

import initialState from '../reducers/initialState';

import Container from './Container';
import GenericButton from './GenericButton';
import Header1 from './Headers/Header1';
import Header2 from './Headers/Header2';

const DeckTouchableOpacity = styled(TouchableOpacity)`
  background-color: rgb(139, 164, 201);
  margin: 10px;
  justify-content: space-around;
  flex-direction: column;
`;

const NewDeckButton = GenericButton.extend`
  background-color: #27c859;
  padding: 5px 15px;
  border-radius: 100px;
`;

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {navigation, decks} = this.props;

    return (
      <Container>
        <Header1>UdaciCards</Header1>
        <Header2>Decks</Header2>

        {decks.map(deck => (
          <DeckTouchableOpacity
            onPress={() => navigation.navigate('IndividualDeckPage', deck.id)}
            title={deck.name}
            key={deck.id}>
            <Text>{deck.name}</Text>
            <Text>{`${deck.cardsById.length} cards`}</Text>
          </DeckTouchableOpacity>
        ))}

        <NewDeckButton onPress={() => navigation.navigate('CreateNewDeckPage')}>
          <Header1>+</Header1>
        </NewDeckButton>
      </Container>
    );
  }
}

const mapStateToProps = ({decks}) => ({
  decks: Object.keys(decks.byId).map(deckId => decks.byId[deckId]),
});

export default connect(mapStateToProps)(Home);
