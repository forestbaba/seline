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

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

// const Drawer = createDrawerNavigator();

export default function Main() {
  return (
    <Drawer />
  );
}