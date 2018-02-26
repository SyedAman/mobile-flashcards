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
					<TouchableOpacity
						onPress={() => navigation.navigate('IndividualDeckPage', { deck })}
						title={deck.name}
						key={index}
					>
						<Text>{deck.name}</Text>
						<Text>{`${deck.cards.length} cards`}</Text>
					</TouchableOpacity>
				))}
			</Container>
		);
	}
}

export default Home;
