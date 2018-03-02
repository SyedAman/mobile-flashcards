import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components';

import initialState from '../reducers/initialState';

const Container = styled.View`
	flex: 1;
	background-color: #fff;
	align-items: center;
	justify-content: center;
`;

const DeckButton = styled(TouchableOpacity)`
	background-color: rgb(139, 164, 201);
	margin: 10px;
	justify-content: space-around;
	flex-direction: column;
`;

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			cards: initialState.cards.byId,
		};
	}

	render() {
		const { navigation, decks } = this.props;

		return (
			<Container>
				<Text>NashCards</Text>
				<Text>Decks</Text>

				{decks.map(deck => (
					<DeckButton
						onPress={() => navigation.navigate('IndividualDeckPage', { deck })}
						title={deck.name}
						key={deck.id}
					>
						<Text>{deck.name}</Text>
						<Text>{`${deck.cardsById.length} cards`}</Text>
					</DeckButton>
				))}
			</Container>
		);
	}
}

const mapStateToProps = ({ decks }) => ({
	decks: Object.keys(decks.byId).map(deckId => decks.byId[deckId]),
});

export default connect(mapStateToProps)(Home);
