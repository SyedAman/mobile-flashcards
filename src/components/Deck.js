import React from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
	flex: 1;
`;

const Deck = ({ navigation }) => {
	const { deck } = navigation.state.params;

	return (
		<Container>
			<Text>{deck.name}</Text>
			<Text>{`${deck.cardsById.length} cards`}</Text>

			<Button
				onPress={() => navigation.navigate('NewCardPage')}
				title="Add Card"
			/>
			<Button
				onPress={() => navigation.navigate('QuizPage', { deck })}
				title="Start Quiz"
			/>
		</Container>
	);
};

export default Deck;
