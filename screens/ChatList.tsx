import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import ChatListItem from '../components/ChatListItem';
import { OFFICIAL_GRAY } from '../utility/constants';

const  ChatList =({readStatus})=> {
    return (
        <View style={styles.parent}>
            <ChatListItem  readStatus={true}/>
            <ChatListItem/>
            
        </View>
    )
}

const styles = StyleSheet.create({
    parent:{
        flex:1,
        marginTop:20,
        justifyContent:"flex-start"
    }
})
export default ChatList;