import React from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
	flex: 1;
`;

const Deck = ({ navigation }) => {
	const { params } = navigation.state;

	return (
		<Container>
			<Text>Colors</Text>
			<Text>{`${params.deck.cards.length} cards`}</Text>

			<Button
				onPress={() => navigation.navigate('NewCardPage')}
				title="Add Card"
			/>
			<Button
				onPress={() => navigation.navigate('QuizPage')}
				title="Start Quiz"
			/>
		</Container>
	);
};

export default Deck;
