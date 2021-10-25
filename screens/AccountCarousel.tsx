import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem';
import data from './data';
import SwipeableViews from 'react-swipeable-views-native';
import BuildYourProfile from './profilesetup/BuildYourProfile';
import IdentifyYourself from './profilesetup/IdentifyYourself';
import AddRecoveryEmail from './profilesetup/AddRecoveryEmail';
import SecureYourAccount from './profilesetup/SecureYourAccount';
import { NavigationStackProp } from 'react-navigation-stack';
import { useDispatch, useSelector } from 'react-redux'
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-community/async-storage';
import { uploadPicture } from '../statemanagement/User/action';

import pick from '../utility/picker';
import { OFFICIAL_RED } from '../utility/constants';

interface AccCarousel {
	item: number;
	navigation: NavigationStackProp;
}

const AccountCarousel: React.FC<AccCarousel> = ({ navigation }) => {
	const { userData: { pictureUpload, uploadError, authUserDetails } } = useSelector((state) => state);

	const dispatch = useDispatch()
	const [index, setIndex] = React.useState(0);
	const isCarousel = React.useRef(null);
	const [isImg, setIsImg] = useState<boolean>(false);
	const [selected, setSelected] = useState<boolean>(false);
	const [avatarSource, setAvatarSource] = useState<any>('');
	const [data, setdata] = useState<any>(null);
	const [errMsg, setErrMsg] = useState<any>(null);
	const [authUser, setAuthUser] = useState<string>("");

	useEffect(() => {

		const check = async () => {
			let w: any = await AsyncStorage.getItem('user_details')
			setAuthUser(w)
		}
		check()
		if (pictureUpload && Object.keys(pictureUpload).length > 0) {
			console.log('GGG', pictureUpload)
			if (pictureUpload.error === true) {

				Toast.show({
					type: `error`,
					text1: 'Status',
					text2: `${pictureUpload.message}`
				});

			} else {
				Toast.show({
					type: 'success',
					text1: 'Status',
					text2: `${pictureUpload.message} 👋`
				});
				setTimeout(() => {
					navigation.navigate('identify')
				}, 3000);
			}


		}
		if (uploadError) {

			console.log('***', uploadError)
		}

	}, [pictureUpload, uploadError])

	const show = () => {
		setErrMsg('')
		pick((source: any, data: any) => {
			setAvatarSource(source);
			setSelected(true);
			setdata(data);
			setIsImg(true);
		});
	};

	const renderImage = (image: any) => {
		return (
			<>
				<Image
					style={{
						width: '50%',
						height: '25%',
						resizeMode: 'cover',
						marginBottom: 6,
						marginTop: 20,
						borderRadius: 10,
						borderWidth: 1,
						alignSelf: 'center'
					}}
					source={image}
				/>
				<TouchableOpacity onPress={() => show()}>
					<Text style={styles.choose}>Change Photo</Text>
				</TouchableOpacity>
			</>
		);
	};
	const renderAsset = (image: any) => {
		return renderImage(image);
	};

	const doUpload = () => {
		if (!data) {
			setErrMsg('An image is required')
		} else {
			let das: any = [{ name: 'image', filename: 'avatar.png', data: data }]
			setErrMsg('')
			let dara = {
				user: authUser,
				data: das
			}
			dispatch(uploadPicture(dara))

		}
	};
	return (
		<View style={styles.parent}>
			<SwipeableViews style={styles.slideContainer}>
				<View style={[styles.slide, styles.slide1]}>
					{isImg ? renderAsset(avatarSource) : null}
					<BuildYourProfile
						hideIcon={isImg}
						errMsg={errMsg}
						// style={{ marginTop: '-10%', zIndex: '1' }}
						pressIcon={() => show()}
						handlePress={() => doUpload()}
					/>
				</View>
				<View>
					<IdentifyYourself handlePress={() => handleUpdate()} />
				</View>
				<View style={[styles.slide, styles.slide3]}>
					<AddRecoveryEmail />
				</View>
				<View style={[styles.slide, styles.slide3]}>
					<SecureYourAccount />
				</View>
			</SwipeableViews>
			<Toast ref={(ref) => Toast.setRef(ref)} />

		</View>
	);
};

const styles = StyleSheet.create({
	parent: {
		flex: 1
	},
	slide: {
		padding: 15,
		minHeight: '100%',
		color: '#fff'
	},
	slideContainer: {
		height: '100%'
	},

	slide1: {
		height: '100%'
	},
	slide2: {
		// backgroundColor: '#B3DC4A',
	},
	slide3: {
		// backgroundColor: '#6AC0FF',
	},
	text: {
		color: '#fff',
		fontSize: 16
	},
	imageView: {
		height: 300,
		backgroundColor: "red"
	},
	choose: {
		textAlign: "center",
		color: OFFICIAL_RED,
		fontWeight: "bold",
		fontSize: 18,
		marginTop: 20
	}
});
export default AccountCarousel;
