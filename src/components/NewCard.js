import React from 'react';
import { View, Text, TextInput } from 'react-native';

const NewCard = () => (
	<View>
		<TextInput placeholder="Question" />
		<TextInput placeholder="Correct Answer" />
	</View>
);

export default NewCard;
