import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import styled from 'styled-components';

import initialState from '../reducers/initialState';

import Container from './Container';
import GenericButton from './GenericButton';
import Header1 from './Headers/Header1';
import Header2 from './Headers/Header2';
import CenteredText from './CenteredText';
import {springGreen, powderBlue} from '../utils/colors';

const DeckButton = styled(TouchableOpacity)`
  background-color: ${powderBlue};
  margin: 10px 0;
  padding: 5px;
  border-radius: 5px;
  justify-content: space-around;
  flex-direction: column;
`;

const NewDeckButton = GenericButton.extend`
  background-color: ${springGreen};
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

        <ScrollView>
          {decks.map(deck => (
            <DeckButton
              onPress={() => navigation.navigate('IndividualDeckPage', deck.id)}
              title={deck.name}
              key={deck.id}>
              <CenteredText>{deck.name}</CenteredText>
              <CenteredText>
                {`${deck.cardsById.length} card${
                  deck.cardsById.length === 1 ? '' : 's'
                }`}
              </CenteredText>
            </DeckButton>
          ))}
        </ScrollView>

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
