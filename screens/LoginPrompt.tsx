import 'react-native-gesture-handler';
import React, { useContext, useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  StatusBar,
  ImageBackground,Dimensions
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SelinSvg from '../assets/seline_red.svg';
import LoginSvg from '../assets/login-prompt.svg';
import FacebookSvg from '../assets/facebook.svg';
import TwitterSvg from '../assets/twitter.svg';
import GoogleSvg from '../assets/google.svg';
import { NavigationStackProp } from 'react-navigation-stack';
import { firebase } from '../utility/firebaseConfig'
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import WhiteRoundCornerButton from '../components/WhiteRoundCornerButton';
import SelineContextProvider , { SelineContext} from '../context/SelineContext';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

interface PhoneVerificationProps{
  navigation: NavigationStackProp<{}>;
}


const PhoneVerification:React.FC<PhoneVerificationProps> = () => {
  const { setisLoggedIn, changeLoginStatus } = useContext(SelineContext)

  const [userInfo, setUserInfo] = useState(null)
  // GoogleSignin.configure();
  const navigation = useNavigation();

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
      webClientId:'90921608227-sj7bl0ar92t4n34em6g0af0dbehvqrl8.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
  }, []);

  const handleGoogleAuth=async()=>{

    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn(); 
      console.log('=======', Object.keys(userInfo));
      console.log('=======', userInfo);

       firestore().collection('Users')
      .where('email', '==', userInfo.user.email)
      .get()
      .then( async querySnapshot => {
        if(querySnapshot.size === 0){

          const newDoc = firestore().collection('Users').doc()
          const newDocRef = await newDoc.get()

          let data={
            uid: newDocRef.id,
            photo: userInfo.user.photo,
            givenName: userInfo.user.givenName,
            familyName: userInfo.user.familyName,
            name: userInfo.user.name,
            email: userInfo.user.email,
            id: userInfo.user.id,
            signUpMode:"google"
          }

          firestore()
          .collection('Users').doc(newDocRef.id)
          .set(data)
          .then(() => {
            setisLoggedIn(true)
           // navigation.goBack()
           changeLoginStatus(true)
            console.log('User added!');
          }).catch(err =>{
            console.log('ERR Login: ', err)
          })
    

        }else{
          setisLoggedIn(true)
          changeLoginStatus(true)

          // navigation.goBack()

        }

      });

      
    } catch (error) {
      console.log(error)

      // if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      //   alert('Cancel');
      // } else if (error.code === statusCodes.IN_PROGRESS) {
      //   alert('Signin in progress');
      //   // operation (f.e. sign in) is in progress already
      // } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      //   alert('PLAY_SERVICES_NOT_AVAILABLE');
      //   // play services not available or outdated
      // } else {
      //   // some other error happened
      // }
    }
 
    // setInterval(() => {
    //   let x = GoogleSignin.isSignedIn()
    //   console.log('>>>>>>>>', x)
    // }, 5000);
    
};

  return (
    <>
      <StatusBar barStyle="dark-content" />
        <View style={styles.backgroundImage} >
          <View style={styles.child1}>
              <View style={styles.titleholder}>
                  <SelinSvg height={50} width={60} fill="blue" style={styles.icon} />
                 <Text style={styles.appName}>Seline</Text>
              </View>
          
            <Text style={styles.hint}>Flirt, Chat and meet people around you</Text>
          </View>
          <View style={styles.child2}>
          <Text style={styles.actionText}>Sign in to continue</Text>

              <WhiteRoundCornerButton 
              title={"Continue with Facebook"} 
              handlePress={()=> navigation.navigate('phoneverification')}
              color={"#E7000E"} textcolor={"#fff"}/>
              <WhiteRoundCornerButton 
              title={"Use phone number"} 
              color={"#000"} 
              textcolor={"#fff"}
              marginTop={10}/>
          </View>
          <LoginSvg height={50} width={290} fill="blue" style={styles.loginsvg} />
          <View style={styles.container}>
            <TouchableOpacity style={styles.icon_button}>
               <FacebookSvg height={50} width={20} fill="white"/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.google_icon_button} onPress={handleGoogleAuth}>
               <GoogleSvg height={50} width={20} fill="blue" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.twitter_icon_button}>
               <TwitterSvg height={50} width={20} fill="white" />
            </TouchableOpacity>
            
          </View>
          <View style={styles.terms_holder}>
            <Text>Terms and Condition</Text>
            <Text>Privacy  Policy</Text>
          </View>

        </View>
    </>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    maxHeight:'100%',
    backgroundColor:"#fff"
},
titleholder:{
flexDirection:'row'
},
loginsvg:{
marginLeft:screenWidth *0.15,
marginRight:20
},
icon:{
marginLeft:screenWidth *0.2,
marginRight:20
},
child1:{
  width:screenWidth,
  marginTop:screenHeight *0.1
},
child2:{
  width:screenWidth,
  marginTop:screenHeight *0.2
},
appName:{
  color:"#000",
  textAlign:"center",
  fontSize:50,
  fontWeight:"bold"
},
hint:{
  textAlign:'center',
  color:'#ffffff',
  fontSize:18,
  paddingTop:15,paddingBottom:15
},
actionbutton:{
backgroundColor:"#fff",
marginLeft:screenWidth * 0.1,
marginRight:screenWidth *0.1,
borderRadius:25


},
actionButtonText:{
  borderRadius:15,
  textAlign:"center",
  paddingTop:15,
  paddingBottom:15,
  fontSize:17,
  fontWeight:'bold',
  color:'#E7000E'
},
blackButton:{
  marginTop:60
},
actionText:{
  textAlign:'center',
  paddingTop:0,
  paddingBottom:30
},
container:{
  flexDirection:'row',
  marginLeft:screenWidth *0.2,
},
icon_button:{
  backgroundColor:'#3B5998',
  paddingLeft:20,
  paddingRight:20,
  borderRadius:8,
  elevation:5,
  shadowColor: 'black',
  shadowOpacity: 0.3,
},
twitter_icon_button:{
  backgroundColor:'#00ACED',
  paddingLeft:20,
  paddingRight:20,
  borderRadius:8,
  marginLeft:20,
  elevation:5,
  shadowColor: 'black',
  shadowOpacity: 0.3,
},
google_icon_button:{
  backgroundColor:'#FFF',
  paddingLeft:20,
  paddingRight:20,
  borderRadius:8,
  marginLeft:20,
  elevation:5,
  shadowColor: 'black',
  shadowOpacity: 0.3,
},
terms_holder:{
  flexDirection:'row',
  justifyContent:'space-around',
  width:"100%",
  alignItems:'center',
  // marginLeft:screenHeight*0.1,
  // marginRight:screenHeight*0.1,
  position:'absolute',
  bottom:40
}
});

export default PhoneVerification;
