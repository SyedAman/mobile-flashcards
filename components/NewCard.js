import React from 'react';
import { View, Text, TextInput } from 'react-native';

const NewCard = () => (
	<View>
		<View>
			<TextInput placeholder="Question" />
		</View>
		<View>
			<TextInput placeholder="Correct Answer" />
		</View>
	</View>
);

export default NewCard;
