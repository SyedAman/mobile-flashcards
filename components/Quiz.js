import React from 'react';
import { View, Text, Button } from 'react-native';

const Quiz = () => (
	<View>
		<Text>What is the color of the sky?</Text>

		<Button title="Correct" />
		<Button title="Incorrect" />
	</View>
);

export default Quiz;
