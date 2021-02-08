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


const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const Stack = createStackNavigator();

interface WrapperProps{
  title:string
}

const Wrapper:React.FC<WrapperProps> =({title}) => {

        const { isLoggedIn } = useContext(SelineContext)

  useEffect(() => {
    // SplashScreen.hide();
    console.log('==============go')
  }, [])
  return (
    <SelineContextProvider>
    <NavigationContainer>
      
      
          <Stack.Navigator>
            {/* <Stack.Screen name="loader" component={LoaderScreen}></Stack.Screen> */}
            {
              isLoggedIn ? (
                <>         
                <Stack.Screen name="main" options={{ headerTransparent: true, headerShown: false}}              title="Seline"         component={Main}/>
                <Stack.Screen name="userslist"          title="seliners"       component={Seliners}/>
                 <Stack.Screen name="matched"            title="Seline"         component={Matched}/>
               </>
                
              ):(
               <>   
                 <Stack.Screen  options={{ headerTransparent: true, headerShown: false}} name="landing"            title="Seline"         component={Landing}/>
                <Stack.Screen name="loginprompt"        title="login"          component={LoginPrompt}/>
                <Stack.Screen name="phoneverification"  title="Verify Phone"   component={PhoneVerification}/>
                 <Stack.Screen name="verifycode"         title="verify code"    component={PhoneVerificationWithInput}/>
                 <Stack.Screen name="accountcarousel"    title="Set up Profile" component={AccountCarousel}/>
                <Stack.Screen name="identify"           title="Identity"       component={IdentifyYourself}/>
                <Stack.Screen name="emailrecovery"      title="Email Recovery" component={AddRecoveryEmail}/>
                <Stack.Screen name="secureaccount"      title="Secure account" component={SecureYourAccount}/>
                <Stack.Screen name="accountsetupdone"   title="Set up Done"    component={AccountSetupDone}/>
                <Stack.Screen name="whointerestin"      title="Interests"      component={WhoAreYouInterestedIn}/>
                </>
              )
            }
      
 


          {/* <Stack.Screen name="editprofile"  title="Edit Profile" component={ProfileEdit}/> */}

          {/* <Stack.Screen name="deleteprofile"  title="Delete Profile" component={DeleteProfile}/> */}
          {/* <Stack.Screen name="chatlist"  title="Chats" component={ChatList}/> */}
          {/* <Stack.Screen name="chatpage"  title="Chat" component={ChatPage}/> */}
          {/* <Stack.Screen name="profile"  title="Profile" component={Profile}/> */}


           
          </Stack.Navigator>

    </NavigationContainer>
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

export default Wrapper;