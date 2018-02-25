import React from 'react';
import { View, Text, Button } from 'react-native';

const Quiz = () => (
	<View>
		<Text>
			<View>What is the color of the sky?</View>

			<Button title="Correct" />
			<Button title="Incorrect" />
		</Text>
	</View>
);

export default Quiz;
