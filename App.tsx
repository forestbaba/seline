import 'react-native-gesture-handler';
import React,{useEffect, useState,useContext} from 'react';
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
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Landing from './screens/Landing';
import LoginPrompt from './screens/LoginPrompt';
import PhoneVerification from './screens/PhoneVerification';
import PhoneVerificationWithInput from './screens/PhoneVerificationWithInput';
import AccountCarousel from './screens/AccountCarousel';
import BuildYourProfile from './screens/profilesetup/BuildYourProfile';
import IdentifyYourself from './screens/profilesetup/IdentifyYourself';
import AddRecoveryEmail from './screens/profilesetup/AddRecoveryEmail';
import SecureYourAccount from './screens/profilesetup/SecureYourAccount';
import AccountSetupDone from './screens/AccountSetupDone';
import WhoAreYouInterestedIn from './screens/WhoAreYouInterestedIn';
import Main from './screens/Main';
import Seliners from './screens/Seliners';
import Matched from './screens/Matched';
import ChatList from './screens/ChatList';
import ChatPage from './screens/ChatPage';
import Profile from './screens/Profile';
import ProfileEdit from './screens/ProfileEdit';
import DeleteProfile from './screens/DeleteProfile';
import LoaderScreen from './screens/LoaderScreen';
import SelineContextProvider , { SelineContext} from './context/SelineContext';
import Wrapper from './Wrapper'
// import SplashScreen from 'react-native-splash-screen'


const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const Stack = createStackNavigator();

interface AppProps{
  title:string
}

const App:React.FC<AppProps> =({title}) => {

  const [isLoggedIn, setIsLoggedIn] = useState(true)

  return (
    <SelineContextProvider>
      <Wrapper/>
    </SelineContextProvider>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    maxHeight:'100%',
},
child1:{
  width:screenWidth,
  marginTop:screenHeight *0.1
},
child2:{
  width:screenWidth,
  marginTop:screenHeight *0.3
},
appName:{
  color:"#FFFFFF",
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
});

export default App;