import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { connect } from 'react-redux';

import * as actionCreators from '../actions';

const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
`;

const Header = styled.Text``;

const SubmitButton = styled.TouchableOpacity`
	border-radius: 25px;
	width: 100px;
	height: 100px;
`;

const NewDeckNameTextField = styled.TextInput``;

class CreateNewDeck extends Component {
	constructor(props) {
		super(props);

		this.state = {
			newDeckName: '',
		};
	}

	handleSubmit = newDeckName => {
		this.props.createDeck(newDeckName);
		this.props.navigation.navigate('HomePage');
	};

	render() {
		return (
			<Container>
				<Header>New Deck</Header>

				<NewDeckNameTextField
					onChangeText={newText => this.setState({ newDeckName: newText })}
				/>

				<SubmitButton onPress={() => handleSubmit(this.state.newDeckname)}>
					<Text>Submit</Text>
				</SubmitButton>
			</Container>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	createDeck: newDeckName => dispatch(actionCreators.createDeck(newDeckName)),
});

export default connect(mapDispatchToProps)(CreateNewDeck);
