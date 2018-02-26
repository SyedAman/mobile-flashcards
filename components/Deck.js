import React from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
	flex: 1;
`;

const Deck = ({ navigation }) => (
	<Container>
		<Text>Colors</Text>
		<Text>5 Cards</Text>

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

export default Deck;
