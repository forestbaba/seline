import 'react-native-gesture-handler';
import React from 'react';
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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import WhiteRoundCornerButton from '../components/WhiteRoundCornerButton';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;



const Landing: () => React$Node = () => {
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
            <TouchableOpacity style={styles.google_icon_button}>
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

export default Landing;
