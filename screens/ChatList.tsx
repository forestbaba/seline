import React,{useContext} from 'react';
import {View, Text, StyleSheet,SafeAreaView, Image} from 'react-native';
import ChatListItem from '../components/ChatListItem';
import { OFFICIAL_GRAY } from '../utility/constants';
import {SelineContext} from '../context/SelineContext'
import { NavigationStackProp } from 'react-navigation-stack';


interface Inter {
    navigation: NavigationStackProp
  }
const  ChatList:React.FC<Inter> =({navigation})=> {
    // const { isLoggedIn } = useContext(SelineContext)

    return (
        // <SafeAreaView >
         <View style={styles.parent}> 
            <ChatListItem  readStatus={true} clicked={()=> navigation.navigate('ChatPage')} />
            <ChatListItem/>
     </View> 
        // </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    parent:{
        flex:1,
        marginTop:100,
        justifyContent:"flex-start"
    }
})
export default ChatList;