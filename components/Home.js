import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

const Home = ({ navigation }) => (
	<View style={styles.container}>
		<Button
			title="Home Page"
			onPress={() => navigation.navigate('IndividualDeckPage')}
		/>
	</View>
);

export default Home;
