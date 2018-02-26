import React from 'react';
import { View, Text, Button } from 'react-native';

const Deck = ({ navigation }) => (
	<View>
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
	</View>
);

export default Deck;
