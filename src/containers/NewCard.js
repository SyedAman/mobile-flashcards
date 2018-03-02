import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { addCardToDeck } from '../actions';

class NewCard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			cardQuestion: '',
			cardAnswer: '',
		};
	}

	handleSubmit = () => {
		const newCardData = {
			parentId: '',
			question: this.state.cardQuestion,
			answers: this.state.cardAnswer,
		};

		this.props.onAddCardToDeck(newCardData);
	};

	render() {
		return (
			<View>
				<TextInput
					onTextChange={newText => this.setState({ cardQuestion: newText })}
					placeholder="Question"
				/>
				<TextInput
					onTextChange={newText => this.setState({ cardAnswer: newText })}
					placeholder="Correct Answer"
				/>
				<TouchableOpacity onPress={this.handleSubmit} />
			</View>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	onAddCardToDeck: newCard => dispatch(addCardToDeck(newCard)),
});

export default connect(null, mapDispatchToProps)(NewCard);
