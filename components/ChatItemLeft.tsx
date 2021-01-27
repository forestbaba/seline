import React from 'react'
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import { OFFICIAL_GRAY, OFFICIAL_RED, OFFICIAL_WHITE } from '../utility/constants';

const {width, height} = Dimensions.get('window');
const ChatItemLeft =()=> {
    return (
        <View style={styles.parent}>
            <View style={styles.contain}>
        
                <View style={styles.textHolder}>
                     <Text style={styles.oppositeChat}>Can you compare the content of composer.json of this cube app to easydispatch?? </Text>
                </View>
                <Text style={styles.time}>12:40</Text>
            </View>
         </View>
    )
}
 
const styles = StyleSheet.create({

    parent:{
        marginTop:50,
        flex:1,
    },
    oppositeChat:{
        width:width *0.5,
        padding:10,       
    },
    image:{
        width: 60,
        height: 60,
        borderRadius: 100,
        marginLeft:10,
        zIndex:100,
        marginTop:10
    },
    contain:{
        flexDirection:"row",
        paddingTop:15,
        paddingBottom:15
    },
    textHolder:{
        borderTopRightRadius:20,
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
        borderWidth:1,
        borderColor:OFFICIAL_GRAY,
        marginLeft:20
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

export default ChatItemLeft;