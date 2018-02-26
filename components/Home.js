import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
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
				{this.state.decks.map((deck, index) => (
					<Button
						onPress={() => navigation.navigate('IndividualDeckPage', { deck })}
						title={deck.name}
						key={index}
					/>
				))}
			</Container>
		);
	}
}

export default Home;
