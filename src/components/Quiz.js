import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Quiz extends Component {
	render() {
		const { navigation } = this.props;
		const { deck } = navigation.state.params;

		return (
			<View>
				<Text>What is the color of the sky?</Text>

				<Button title="Correct" />
				<Button title="Incorrect" />
			</View>
		);
	}
}

export default Quiz;
