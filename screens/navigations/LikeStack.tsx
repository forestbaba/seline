import React,{useEffect, useState} from 'react';
import { TouchableOpacity, Text, PermissionsAndroid, Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Likes from './Likes';
import ChatList from '../ChatList';
import { View } from 'react-native';
import SelinMenu from '../../assets/SelineMenuIcon.svg';
import Seline from '../../assets/seline_red.svg';
import SelineMessageIcon from '../../assets/seline_message_icon.svg';
import { OFFICIAL_GRAY, OFFICIAL_RED, OFFICIAL_WHITE } from '../../utility/constants';
import AIcon from 'react-native-vector-icons/AntDesign';
import Geolocation from '@react-native-community/geolocation';
import ChatPage from '../ChatPage';
import Seliners from '../../components/SelinersItem';
import SelinerDetails from '../SelinersDetails';
import SelinerGallery from '../SelinersGallery';

const Stack = createStackNavigator();

const LikeStack = ({ navigation }) => {
    const [currentLongitude, setCurrentLongitude] = useState('...');
      const [currentLatitude,setCurrentLatitude] = useState('...');
      const [locationStatus,setLocationStatus] = useState('');

      useEffect(() => {
        const requestLocationPermission = async () => {
          if (Platform.OS === 'ios') {
            getOneTimeLocation();
            subscribeLocationLocation();
          } else {
            try {
              const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                  title: 'Location Access Required',
                  message: 'This App needs to Access your location',
                },
              );
              if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                //To Check, If Permission is granted
                getOneTimeLocation();
                subscribeLocationLocation();
              } else {
                setLocationStatus('Permission Denied');
              }
            } catch (err) {
              console.warn(err);
            }
          }
        };
        requestLocationPermission();
        return () => {
          Geolocation.clearWatch(watchID);
        };
      }, []);

  
      const getOneTimeLocation = () => {
        setLocationStatus('Getting Location ...');
        Geolocation.getCurrentPosition(
          //Will give you the current location
          (position) => {
            setLocationStatus('You are Here');
    
            //getting the Longitude from the location json
            const currentLongitude = 
              JSON.stringify(position.coords.longitude);
    
            //getting the Latitude from the location json
            const currentLatitude = 
              JSON.stringify(position.coords.latitude);
    
            //Setting Longitude state
            setCurrentLongitude(currentLongitude);
            
            //Setting Longitude state
            setCurrentLatitude(currentLatitude);
          },
          (error) => {
            setLocationStatus(error.message);
          },
          {
            enableHighAccuracy: false,
            timeout: 30000,
            maximumAge: 1000
          },
        );
      };
    
      const subscribeLocationLocation = () => {
        watchID = Geolocation.watchPosition(
          (position) => {
            //Will give you the location on location change
            
            setLocationStatus('You are Here');
            console.log(position);
    
            //getting the Longitude from the location json        
            const currentLongitude =
              JSON.stringify(position.coords.longitude);
    
            //getting the Latitude from the location json
            const currentLatitude = 
              JSON.stringify(position.coords.latitude);
    
            //Setting Longitude state
            setCurrentLongitude(currentLongitude);
    
            //Setting Latitude state
            setCurrentLatitude(currentLatitude);
          },
          (error) => {
            setLocationStatus(error.message);
          },
          {
            enableHighAccuracy: false,
            maximumAge: 1000
          },
        );
      };

	return (
		<Stack.Navigator
			screenOptions={{
				headerTransparent: false,
				headerShown: true,

				

				//   headerTitle: () => (
				//     <Text>Hello</Text>
				// ),
				// headerLeft: () => (
				//    <Text>Base</Text>
				// )
			}}
		>
            <Stack.Screen 
            options={{
                headerTransparent: false,
                headerShown: true,
                headerTitle: () => (
					<Seline height={65} width={50} fill="blue"/>
				),
				headerLeft: () => (
					<TouchableOpacity onPress={() => navigation.openDrawer()}>
						<SelinMenu height={30} width={50} fill="blue" style={{ marginLeft: 15 }} />
					</TouchableOpacity>
				),
				headerRight: () => (
					<TouchableOpacity onPress={() => navigation.navigate('Likes', { screen: 'ChatList' })}>
						<SelineMessageIcon height={30} width={30} fill={OFFICIAL_GRAY} style={{ marginRight: 15 }} />
					</TouchableOpacity>
				)
            }}
            name="Likes">
				{(props) => (
					<Likes
						{...props}
						options={{
							title: 'My home',
							headerStyle: {
								backgroundColor: '#f4511e'
							},
							headerTintColor: '#fff',
                            headerTitleStyle: { fontWeight: 'bold' },

                            headerShown: true,

                            
                            headerRight: () => (
                                <TouchableOpacity onPress={() => navigation.navigate('Likes',{ screen: 'Likes' })}>
                                    <AIcon name={'back'} color={OFFICIAL_RED} size={20} />
                                </TouchableOpacity>
                            )
						}}
					/>
				)}
			</Stack.Screen>
			<Stack.Screen
				options={{
					headerTransparent: false,
					headerShown: true,
					headerLeft: () => (
						<TouchableOpacity onPress={() => navigation.navigate('Likes',{ screen: 'Likes' })}>
							<AIcon name={'back'} color={OFFICIAL_RED} size={20} />
						</TouchableOpacity>
					)
				}}
				name="ChatList"
			>
				{(props) => <ChatList {...props} />}
			</Stack.Screen>
			<Stack.Screen name="ChatPage">{props => <ChatPage {...props} />}</Stack.Screen>
            <Stack.Screen name="userslist" title="seliners" component={Seliners} />
            <Stack.Screen name="selinerdetails" title="Seliner Details" component={SelinerDetails}

            options={({ route }:any) => ({
                header:()=>null
                // title: route.params.name,
               })}

            />
            <Stack.Screen name="selinergallery" title="Seliner Gallery" component={SelinerGallery}/>


			{/* <Stack.Screen name="Messages">{props => <Messages {...props} />}</Stack.Screen> */}
		</Stack.Navigator>
	);
};
export default LikeStack;
