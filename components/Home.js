import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
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

		this.state = initialState;
	}

	render() {
		const { navigation } = this.props;

		return (
			<Container>
				<Text>NashCards</Text>
				<Text>Decks</Text>

				{this.state.decks.map((deck, index) => (
					<DeckButton
						onPress={() => navigation.navigate('IndividualDeckPage', { deck })}
						title={deck.name}
						key={index}
					>
						<Text>{deck.name}</Text>
						<Text>{`${deck.cards.length} cards`}</Text>
					</DeckButton>
				))}
			</Container>
		);
	}
}

export default Home;
