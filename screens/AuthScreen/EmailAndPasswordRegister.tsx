import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import RoundCornerTextInput from '../../components/RoundCornerTextInput';
import WhiteRoundCornerButton from '../../components/WhiteRoundCornerButton';
import WhiteRoundCornerButtonWithBorder from '../../components/WhiteRoundCornerButtonWithBorder';
import SelinSvg from '../../assets/seline_red.svg';
import LoginSvg from '../../assets/login-prompt.svg';
import FacebookSvg from '../../assets/facebook.svg';
import TwitterSvg from '../../assets/twitter.svg';
import GoogleSvg from '../../assets/google.svg';
import { NavigationContainer } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const EmailAndPasswordRegister = ({ navigation }: any) => {
	return (
		<View style={styles.parent}>
			<RoundCornerTextInput placeholder={'Full name'} width={'90%'} textcolor="black" />
			<RoundCornerTextInput placeholder={'Username'} width={'90%'} textcolor="black" />
			<RoundCornerTextInput placeholder={'Email'} width={'90%'} textcolor="black" />
			<RoundCornerTextInput placeholder={'Password'} width={'90%'} textcolor="black" />
			<RoundCornerTextInput placeholder={'Password'} width={'90%'} textcolor="black" />

			<View style={styles.w}>
				<WhiteRoundCornerButtonWithBorder
					color={'red'}
					textcolor={'white'}
					// marginTop={20}
					title={'Login'}
				/>
			</View>
			<View style={styles.otherActionHolder}>
				<TouchableOpacity onPress={() => navigation.navigate("Forgot Password")}>
					<Text style={styles.blueStyle}>Forgot Password ?</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text style={styles.blueStyle}>Create Accout</Text>
				</TouchableOpacity>
			</View>
			<LoginSvg height={50} width={290} fill="blue" style={styles.loginsvg} />
			<View style={styles.container}>
				<TouchableOpacity style={styles.icon_button}>
					<FacebookSvg height={50} width={20} fill="white" />
				</TouchableOpacity>
				<TouchableOpacity style={styles.google_icon_button} onPress={() => { }}>
					<GoogleSvg height={50} width={20} fill="blue" />
				</TouchableOpacity>
				<TouchableOpacity style={styles.twitter_icon_button}>
					<TwitterSvg height={50} width={20} fill="white" />
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	parent: {
		flex: 1,
		maxHeight: '100%',
		backgroundColor: '#fff',
		justifyContent: "center",

		alignItems: 'center'
	},
	actionButton: {
		width: '60%'
	},
	otherActionHolder: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		padding: 20
	},

	icon_button: {
		backgroundColor: '#3B5998',
		paddingLeft: 20,
		paddingRight: 20,
		borderRadius: 8,
		elevation: 5,
		shadowColor: 'black',
		shadowOpacity: 0.3
	},
	twitter_icon_button: {
		backgroundColor: '#00ACED',
		paddingLeft: 20,
		paddingRight: 20,
		borderRadius: 8,
		marginLeft: 20,
		elevation: 5,
		shadowColor: 'black',
		shadowOpacity: 0.3
	},
	google_icon_button: {
		backgroundColor: '#FFF',
		paddingLeft: 20,
		paddingRight: 20,
		borderRadius: 8,
		marginLeft: 20,
		elevation: 5,
		shadowColor: 'black',
		shadowOpacity: 0.3
	},
	container: {
		flexDirection: 'row'
		// marginLeft: screenWidth * 0.2,
	},
	loginsvg: {
		// marginLeft: screenWidth * 0.15,
		marginRight: 20
	},
	loginButton: {
		// flex: 1,
		width: '70%'
	},
	blueStyle: {
		color: 'blue'
	},
	w: {
		width: "90%",
		marginTop: 20
	}
});
export default EmailAndPasswordRegister;
