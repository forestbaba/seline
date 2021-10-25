import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text, Alert, TouchableOpacity, Dimensions } from 'react-native';
import RoundCornerTextInput from '../../components/RoundCornerTextInput';
import WhiteRoundCornerButton from '../../components/WhiteRoundCornerButton';
import WhiteRoundCornerButtonWithBorder from '../../components/WhiteRoundCornerButtonWithBorder';
import LoginSvg from '../../assets/login-prompt.svg';
import FacebookSvg from '../../assets/facebook.svg';
import TwitterSvg from '../../assets/twitter.svg';
import GoogleSvg from '../../assets/google.svg';
import PhoneInput from 'react-native-phone-number-input';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage';

import { verifyPhone, loginAttemp } from '../../statemanagement/User/action';
import { OFFICIAL_RED } from '../../utility/constants';
import { TextInput } from 'react-native-gesture-handler';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const EmailAndPasswordLogin = ({ navigation }: any) => {

	const { userData: { loading, authUserDetails, autherror } } = useSelector((state) => state);

	const [show, setShow] = useState(false);
	const [countryCode, setCountryCode] = useState('');
	const phoneInput = useRef(null);
	const [phoneNumber, setphoneNumber] = useState('');
	const [authError, setAuthError] = useState<any>({})
	const [password, setPassword] = useState("")
	const [showPassword, setShowPassword] = useState(false)
	const dispatch = useDispatch()

	let authE = [
		{ step: 1, screen: "verifycode" },
		{ step: 2, screen: "accountcarousel" },
		{ step: 3, screen: "identify" },
		{ step: 4, screen: "emailrecovery" },
		{ step: 5, screen: "secureaccount" },
		{ step: 6, screen: "accountsetupdone" },
		{ step: 7, screen: "main" },
	]

	useEffect(() => {


		if (autherror && Object.keys(autherror).length > 0) {

			AsyncStorage.setItem('user_details', autherror.user._id)
			

			if (autherror && autherror.step) {
				console.log('{}{}: ', autherror.step)
				if(autherror.step > 6){
					setShowPassword(true)
				}else{
					navigation.navigate(authE[autherror.step - 1].screen)

				}
			} else {
				console.log('LLL:', autherror)
				setAuthError(autherror)
			}

		} else {
			console.log('jhj', authError)
		}
		if (authUserDetails && Object.keys(authUserDetails).length > 0) {
			console.log('^*^*^*^', authUserDetails)
			if (authUserDetails.error === false) {

				if (authUserDetails.step === 2) {
					navigation.navigate('accountcarousel')
				}
				if (authUserDetails.step === 3) {
					navigation.navigate('identify')
				}
				if(authUserDetails.message.toLowerCase() === "login success"){
					navigation.navigate('main')
				}
				// navigation.navigate('verifycode', {
				// 	phoneNumber
				// })
			}
		}
	}, [authUserDetails, autherror])

	const gotoNext = () => {
		if (!phoneNumber || phoneNumber === '') {
			setAuthError({ message: "Phone number field is required" })
		} else {
			if(showPassword){
				let data={
					phone:phoneNumber,
					password
				}
				dispatch(loginAttemp(data))
			}else{
				let data = { phoneNumber }
			dispatch(verifyPhone(data));
			}
			
		}
	}
	return (
		<View style={styles.parent}>
			<PhoneInput
				ref={phoneInput}
				defaultValue={phoneNumber}
				defaultCode="NG"
				layout="first"
				withShadow
				autoFocus
				containerStyle={styles.phoneContainer}
				textContainerStyle={styles.textInput}
				onChangeFormattedText={text => {
					setphoneNumber(text);
				}}
			/>
			{
				showPassword ? (<TextInput
					placeholder={"Password"}
					secureTextEntry
					style={styles.password}
					onChangeText={text => setPassword(text)}
				/>) : null
			}



			<View style={styles.w}>
				{authError && authError.message ? <Text style={styles.errorLabel}>{authError && authError.message}</Text> : null}
				<WhiteRoundCornerButtonWithBorder
					color={'red'}
					textcolor={'white'}
					// marginTop={20}
					title={'Login'}
					loading={false}
					onPress={gotoNext}
				/>
			</View>
			<View style={styles.otherActionHolder}>
				<TouchableOpacity onPress={() => navigation.navigate("Forgot Password")}>
					<Text style={styles.blueStyle}>Forgot Password ?</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('Register')}>
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
	},

	// container: {
	//   flex: 1,
	//   justifyContent: 'center',
	//   alignItems: 'center',
	// },
	phoneContainer: {
		width: '85%',
		height: 50,
	},
	button: {
		marginTop: 30,
		width: '75%',
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'green',
	},
	textInput: {
		paddingVertical: 0,
	},
	errorLabel: {
		color: OFFICIAL_RED,
		width: "90%",
		textAlign: "center",
		padding: 20
	},
	password: {
		width: "85%",
		backgroundColor: "#fff",
		marginTop: 20,
		padding: 15,
		shadowOpacity: 0.2,
		shadowRadius: 5,
		shadowColor: "black",
		elevation: 5
	}
});
export default EmailAndPasswordLogin;
