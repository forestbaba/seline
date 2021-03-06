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
import SelinSvg from '../assets/seline.svg';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import WhiteRoundCornerButton from '../components/WhiteRoundCornerButton';
import {DEAR_USER_ACCOUNT} from '../utility/constants'

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

import { NavigationStackProp } from 'react-navigation-stack';

interface SecAcc{
    navigation:NavigationStackProp
}

const Landing: React.FC<{}> = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
        <ImageBackground source={require('../assets/background.png')} style={styles.backgroundImage} >
          <View style={styles.child1}>
              <View style={styles.titleholder}>
                  <SelinSvg height={50} width={60} fill="blue" style={styles.icon} />
                 <Text style={styles.appName}>Seline</Text>
              </View>
          
            <Text style={styles.hint}>{DEAR_USER_ACCOUNT}</Text>
          </View>
          <View style={styles.child2}>
              <WhiteRoundCornerButton 
              handlePress={()=> navigation.navigate('whointerestin')}
              title={"Done"} color="white"/>
           
          </View>
        </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    maxHeight:'100%',
},
titleholder:{
flexDirection:'row'
},
icon:{
marginLeft:screenWidth *0.2,
marginRight:20
},
child1:{
  width:screenWidth,
  marginTop:screenHeight *0.1,
  flex:0.5
},
child2:{
  width:screenWidth,
  marginBottom:screenHeight *0.1,
  flex:0.5,
  justifyContent:"flex-end"
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

export default Landing;
