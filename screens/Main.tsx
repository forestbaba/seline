// import React from 'react';
// import {View, Text} from 'react-native';

// const  Main =()=> {
//     return (
//         <View>
            
//         </View>
//     )
// }
// export default  Main;

import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Drawer from './navigations/Drawer';
import { NavigationStackProp } from 'react-navigation-stack';

interface MainProps{
    navigation:NavigationStackProp,
   
}
const Main:React.FC<MainProps>=({navigation})=> {
  return (
    <Drawer/>
  );
}

export default Main;