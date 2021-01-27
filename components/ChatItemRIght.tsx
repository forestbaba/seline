import React from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import { OFFICIAL_GRAY, OFFICIAL_RED, OFFICIAL_WHITE } from '../utility/constants';

const {width, height} = Dimensions.get('window');
const ChatItemRight =()=> {
    return (
        <View style={styles.parent}>
                <View style={styles.rightcontain}>
                    <Text style={styles.time}>12:40</Text>
                    <View style={styles.rightHolder}>
                        <Text style={styles.personalchat}>Can you compare the content ofCan you compare the content ofCan you compare the content ofCan you compare the content ofCan you compare the content ofCan you compare the content of composer.json of this cube app to easydispatch?? </Text>
                    </View>
            </View>
         </View>
    )
}
 
const styles = StyleSheet.create({

    parent:{
        marginTop:50,
        flex:1,
    },
    rightHolder:{
        width:width *0.5,
        padding:10,
        backgroundColor:OFFICIAL_RED,
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20,
      
    },
    personalchat:{
        color:OFFICIAL_WHITE
    },
    rightcontain:{
        width:"100%",
        justifyContent:"flex-end",
        padding:10,
        flexDirection:'row'
    },
    time:{
        color:OFFICIAL_GRAY,
        fontSize:18,
        padding:10
    }
})

export default ChatItemRight;