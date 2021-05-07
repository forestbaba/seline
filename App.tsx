import 'react-native-gesture-handler';
import React,{useState} from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SelineContextProvider  from './context/SelineContext';
import Wrapper from './Wrapper'
// import SplashScreen from 'react-native-splash-screen'


const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;


interface AppProps{
  title:string
}

const App:React.FC<AppProps> =({}) => {

  const [] = useState(true)

  return (
    <SelineContextProvider>
      <Wrapper/>
    </SelineContextProvider>
  );
};


export default App;