import React from 'react'
import {View,TextInput, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import ChatItemLeft from '../components/ChatItemLeft';
import ChatItemRight from '../components/ChatItemRIght';
import { OFFICIAL_GRAY, OFFICIAL_RED, OFFICIAL_WHITE } from '../utility/constants';
import FIcon from 'react-native-vector-icons/Feather'

const {width, height} = Dimensions.get('window');
const ChatPage =()=> {
    return (
        <View style={styles.parent}>
           <ChatItemLeft/>
           <ChatItemRight/>
           <View style={styles.chatinputHolder}>
               <TextInput placeholder="Start chatting" style={styles.typemsg}/> 
               <TouchableOpacity>
                  <FIcon color={OFFICIAL_RED} size={25} name="send"/>
              </TouchableOpacity>
           </View>
         </View>
    )
}
 
const styles = StyleSheet.create({

    parent:{
        marginTop:50,
        flex:1,
        marginBottom:50,
        marginLeft:20
        // justifyContent:"flex-start",
        // alignItems:"flex-start"
    },
    typemsg:{
       
    },
    chatinputHolder:{
        borderRadius:25,
        borderWidth:1,
        padding:15,
        justifyContent:"space-between",
        flexDirection:'row'
    }
   
})

export default ChatPage;