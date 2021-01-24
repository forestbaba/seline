import React from 'react';
import { Image,Button, Text, StyleSheet,View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {OFFICIAL_RED, OFFICIAL_WHITE} from '../../utility/constants'
import {
  DrawerItem,
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
// import { Feather, AntDesign } from '@expo/vector-icons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SelinMenu from '../../assets/SelineMenuIcon.svg'
// import {  Button, Text } from 'expo-ui-kit';
// import { LinearGradient } from 'expo-linear-gradient';

// screens
import Dashboard from './Dashboard';
import Messages from './Messages';
import Contact from './Contact';
import DrawerItemCustom from '../../components/DrawerItemCustom';

import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Screens = ({ navigation, style }) => {
  return (
    <Animated.View style={StyleSheet.flatten([styles.stack, style])}>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitle: null,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <SelinMenu height={45} width={50} fill="blue"/>
                {/* <Feather name="menu" size={18} color="black" style={{ paddingHorizontal: 10 }} />  */}
             {/* <AntDesign name="menu" size={18} color="black" style={{ paddingHorizontal: 10 }} /> */}
              </TouchableOpacity>
          ),
        }}>
        <Stack.Screen name="Home">{props => <Dashboard {...props} />}</Stack.Screen>
        <Stack.Screen name="Messages">{props => <Messages {...props} />}</Stack.Screen>
        <Stack.Screen name="Contact">{props => <Contact {...props} />}</Stack.Screen>
      </Stack.Navigator>
    </Animated.View>
  );
};

const DrawerContent = props => {
  return (
    <DrawerContentScrollView {...props} scrollEnabled={false} contentContainerStyle={{ flex: 1, backgroundColor:OFFICIAL_RED }}>
      <View style={{flex:0.9}}>
        <View style={styles.avatarContainer}>
          <Image
            source={{
              source: {uri: require('../../assets/avatar.png')},
              height: 60,
              width: 60,
              scale: 0.5,
            }}
            resizeMode="center"
            style={styles.avatar}
          />
          <Text style={styles.username}>
            James Kawag
          </Text>
          <Text style={styles.addr}>
          34. Egbeda, Lagos
          </Text>
        </View>
        <View style={{ width:"100%"}}>
          <DrawerItem
            label={()=>{
              return <DrawerItemCustom title="Likes" counter={'40'}/>
              
            }}
            labelStyle={styles.drawerLabel}
            // style={styles.drawerItem}
            onPress={() => props.navigation.navigate('Home')}
            icon={() => <Ionicons name="ios-checkmark-circle-outline" color="white" size={25} />}
          />
          <DrawerItem
           label={()=>{
            return <DrawerItemCustom title="Matches" counter={'40'}/>
            
          }}
            labelStyle={{ color: 'white', marginLeft: -16 }}
            // style={{ alignItems: 'flex-start', marginVertical: 0 }}
            onPress={() => props.navigation.navigate('Messages')}
            icon={() => <AntDesign name="hearto" color="white" size={25} />}
          />
          <DrawerItem
             label={()=>{
              return <DrawerItemCustom title="Looking for"/>
              
            }}
            labelStyle={{ color: 'white', marginLeft: -16 }}
            // style={{ alignItems: 'flex-start', marginVertical: 0 }}
            onPress={() => props.navigation.navigate('Contact')}
            icon={() => <Ionicons name="compass-outline" color="white" size={25} />}
          />
          <DrawerItem
             label={()=>{
              return <DrawerItemCustom title="Settings"/>
              
            }}
            labelStyle={{ color: 'white', marginLeft: -16 }}
            // style={{ alignItems: 'flex-start', marginVertical: 0 }}
            onPress={() => props.navigation.navigate('Contact')}
            icon={() => <Feather name="settings" color="white" size={25} />}
          />
        </View>
      </View>

      <View style={{backgroundColor:"green", marginTop:70}}>
        <DrawerItem
          label="Logout"
          labelStyle={{ color: 'white' }}
          icon={() => <AntDesign name="logout" color="white" size={16} />}
          onPress={() => alert('Are your sure to logout?')}
        />
      </View>
    </DrawerContentScrollView>
  );
};

export default () => {
  const [progress, setProgress] = React.useState(new Animated.Value(0));
  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 16],
  });

  const animatedStyle = { borderRadius, transform: [{ scale }] };

  return (
    // <LinearGradient style={{ flex: 1 }} colors={['#E94057', '#4A00E0']}>
      <Drawer.Navigator
        // hideStatusBar
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={styles.drawerStyles}
        contentContainerStyle={{ flex: 1 }}
        drawerContentOptions={{
          activeBackgroundColor: 'transparent',
          activeTintColor: 'white',
          inactiveTintColor: 'white',
        }}
        sceneContainerStyle={{ backgroundColor: OFFICIAL_RED }}
        drawerContent={props => {
          setProgress(props.progress);
          return <DrawerContent {...props} />;
        }}>
        <Drawer.Screen name="Screens">
          {props => <Screens {...props} style={animatedStyle} />}
        </Drawer.Screen>
      </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  stack: {
    flex: 1,
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
    // overflow: 'scroll',
    // borderWidth: 1,
  },
  drawerStyles: { flex: 1, width: '50%', backgroundColor: 'transparent' },
  drawerItem: { alignItems: 'flex-start', marginVertical: 0 },
  drawerLabel: { color: 'white', marginLeft: -16 },
  avatar: {
    borderRadius: 60,
    marginBottom: 16,
    borderColor: 'white',
    borderWidth: StyleSheet.hairlineWidth,
    height:60
  },
  avatarContainer:{
      flex:0.4,
      justifyContent:"center",
      alignItems:"center",
      bottom:20,
      margin:20,
      height:200
  },
  username:{
    color:OFFICIAL_WHITE,
    fontSize:25,
    fontWeight:'bold'
  },
  addr:{
    color:OFFICIAL_WHITE,
    fontSize:16
  }
});