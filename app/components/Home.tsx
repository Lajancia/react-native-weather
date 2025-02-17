import React, { useState } from 'react';
import {
	Text,
	View,
	StyleSheet,
	Dimensions,
	TextInput,
	Image,
	KeyboardAvoidingView,
	Platform,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const { width } = Dimensions.get('window');
const Home = () => {
	const [text, setText] = useState('');
	return (
		<KeyboardAvoidingView style={styles.container}>
			<View style={styles.top}>
				<TextInput
					style={styles.input}
					placeholder="City/State"
					placeholderTextColor="#ECDFCC"
					value={text}
					onChangeText={setText}
				/>
				<Text style={styles.cityTitle}>SEOUL</Text>
				<View style={styles.line} />
				<Text style={styles.weatherData}>SUNNY</Text>
				<Text style={styles.weatherData}>10°C - 14°C</Text>
			</View>
			<View style={styles.body}>
				<Text>TODAY</Text>
				<Image
					source={require('../../assets/images/sunny.png')}
					style={styles.image}
				/>
			</View>
			<View style={styles.bottom}>
				<Text style={styles.date}>TUE</Text>
				<Text style={styles.date}>WED</Text>
				<Text style={styles.date}>THU</Text>
			</View>
		</KeyboardAvoidingView>
	);
};

export default Home;

const styles = StyleSheet.create({
	date: {
		color: '#3C3D37',
		fontWeight: 600,
	},
	image: {
		width: '100%',
		height: '100%',
		resizeMode: 'contain',
	},
	top: {
		flex: 2,
	},
	body: {
		flex: 4,
	},
	bottom: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		gap: 50,
		alignContent: 'center',
	},
	container: {
		flex: 1,
		backgroundColor: '#ECDFCC',
		padding: 30,
	},
	input: {
		height: 45,
		borderColor: '#697565',
		color: '#ECDFCC',
		backgroundColor: '#697565',
		borderWidth: 1,
		paddingLeft: 8,
		width: '100%',
		borderRadius: 5,
	},

	cityTitle: {
		color: '#3C3D37',
		fontSize: 50,
		fontWeight: 600,
		marginTop: 10,
	},

	line: {
		width: width * 0.2, // 화면 너비의 5%
		height: 4, // 라인의 높이 (두께)
		backgroundColor: '#697565', // 라인의 색상
	},

	weatherData: {
		color: '#3C3D37',
		marginBottom: -10,
		fontSize: 30,
		fontWeight: 500,
	},
});
