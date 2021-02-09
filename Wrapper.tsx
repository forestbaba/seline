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

import AsyncStorage from '@react-native-community/async-storage';

import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
import firestore from '@react-native-firebase/firestore';

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
import {AuthContext} from './context/AuthContext';
import {handleGoogleAuth} from './utility/authHelper';

import Geolocation from '@react-native-community/geolocation';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const Stack = createStackNavigator();

interface WrapperProps{
  title:string
}

const Wrapper:React.FC<WrapperProps> =({title}) => {

  const [loading, setLoading] = useState(false);
  // const [userToken, setuserToken] = useState<any>(null)
  // const [isLoading, setIsLoading] = useState(false)
  // const [userToken, setUserToken] = useState(null);

  const { setCurrUser, setUser } = useContext(SelineContext)


 let initialLoginState={
    isLoading: true,
    userName: null,
    userToken: null,
    userDetails: null
  }

  const loginreducer =(prevState:any, action:any)=>{
    switch( action.type){
      case "RETRIEVE_TOKEN":
        return {
          ...prevState, 
          userToken: action.token,
          userDetails: action.userDetails,
          isLoading:false
        };
      case "LOGIN":
        return {
          ...prevState, 
          userName: action.id,
          userToken: action.token,
          userDetails: action.userDetails,
          isLoading:false
        };
      case "LOGOUT":
        return {
          ...prevState, 
          userName: null,
          userToken: null,
          userDetails:null,
          isLoading:false
        };
      case "REGISTER":
        return {
          ...prevState, 
          userName: action.id,
          userToken: action.token,
          userDetails: action.userDetails,
          isLoading:false
        };
    }
  }

  const [loginState, dispatch] = React.useReducer(loginreducer, initialLoginState);


  useEffect(() => {

    let userToken: any;
    userToken = null;
    let userDetails:any = null

    setTimeout(async () => {
      try {
        userToken = await AsyncStorage.getItem('userToken')
        if(userToken){
      
          firestore().collection('Users')
      .where('uid', '==', userToken)
      .get()
      .then( async snap=>{
        userDetails = snap.docs[0]._data
       await AsyncStorage.setItem('userdetails', userToken)
       console.log('Full Data: ', userDetails)
        setCurrUser(userDetails)
        setUser('userDetails')


      }).catch(err =>{
        console.log('ERR: ', err)
      })
     }
        console.log('Toks: ', userToken)
        
      } catch (error) {
        console.log(error)
      }
      dispatch({type:"RETRIEVE_TOKEN", token: userToken, userDetails:userDetails})

    }, 3000);

  }, [])


  const authContext = React.useMemo(() => ({

    signIn: async () =>{
      try {
         let userToken:any;
      userToken = null

     let location:object = {};
      const userInfo = await GoogleSignin.signIn(); 
       firestore().collection('Users')
      .where('email', '==', userInfo.user.email)
      .get()
      .then( async querySnapshot => {
        if(querySnapshot.size === 0){
           Geolocation.getCurrentPosition(info => { location = info});

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
            signUpMode:"google",
            location: location
          }

          userToken = newDocRef.id
          firestore()
          .collection('Users').doc(newDocRef.id)
          .set(data)
          .then(async data => {
               newDocRef.id;
               await AsyncStorage.setItem('userToken',newDocRef.id)
               setCurrUser(data)
               dispatch({type:"LOGIN",  token: userToken, userData: data})

            console.log('User added!' ,  newDocRef.id);
          }).catch(err =>{
            

            console.log('ERR Login: ', err)
          })
    

        }else{

          setCurrUser(querySnapshot.docs[0]._data)
          userToken=querySnapshot.docs[0]._data.uid
          await AsyncStorage.setItem('userToken',querySnapshot.docs[0]._data.uid)
          await AsyncStorage.setItem('userdetails',querySnapshot.docs[0]._data)
            console.log('========',querySnapshot.docs[0]._data.uid )
            dispatch({type:"LOGIN",  token: userToken, userData:querySnapshot.docs[0]._data})
         
        }

      });

    } catch (error) {
        console.log('ERR: ', error)
}
  




   

      // let username='userx'
      //let userToken;
    //  userToken = null

      // try {
      //   userToken = 'kjdfkk'
      //    await AsyncStorage.setItem('userToken',userToken)
        
      // } catch (error) {
      //   console.log(error)
      // }
      //   console.log('Handle login')
      //   setLoading(false)
      //   dispatch({type:"LOGIN", id:username, token: userToken})
    },
    signOut: async() =>{
      console.log('Handle sign out')
      let m1 = AsyncStorage.getItem('userToken');
      console.log('Old token: ', m1)

      try {
         await AsyncStorage.setItem('userToken','')
        
      } catch (error) {
        console.log(error)
      }
      let m2 = AsyncStorage.getItem('userToken');
      console.log('Old token 2: ', m2)
        dispatch({type:"LOGOUT"})

    },
    signUp: () => {
      console.log('Handle sign up')

        setLoading(false)
        // setuserToken("abc")
    },

  }),[])



  if(loginState.isLoading){
    return <LoaderScreen/>;
  }
  return (   
  <SelineContextProvider>

    <AuthContext.Provider value= {authContext}>
    <NavigationContainer>
      
      
          <Stack.Navigator>
            {/* <Stack.Screen name="loader" options={{ headerTransparent: true, headerShown: false}}   component={LoaderScreen}></Stack.Screen> */}
 {
              loginState.userToken !== null || loginState.userToken && loginState.userToken.length > 0 ? (
                <>         
                <Stack.Screen name="main" options={{ headerTransparent: true, headerShown: false}}              title="Seline"         component={Main}/>
                <Stack.Screen name="userslist"          title="seliners"       component={Seliners}/>
                 <Stack.Screen name="matched"            title="Seline"         component={Matched}/>
               </>
                
              ):(
               <>
                <Stack.Screen name="loginprompt"        title="login"          component={LoginPrompt}/>
                <Stack.Screen  options={{ headerTransparent: true, headerShown: false}} name="landing"            title="Seline"         component={Landing}/>
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
    </AuthContext.Provider> 
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