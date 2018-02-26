import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
	flex: 1;
	background-color: #fff;
	align-items: center;
	justify-content: center;
`;

const Home = ({ navigation }) => (
	<Container>
		<Button
			title="Colors"
			onPress={() => navigation.navigate('IndividualDeckPage')}
		/>
	</Container>
);

export default Home;
