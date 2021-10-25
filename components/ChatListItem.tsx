import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, GestureResponderEvent} from 'react-native';
import { OFFICIAL_GRAY, OFFICIAL_PINK,OFFICIAL_WHITE,OFFICIAL_GREEN } from '../utility/constants';
import Ficon from 'react-native-vector-icons/FontAwesome'
const  ChatListItem:React.FC<{readStatus?:boolean, clicked?:()=>void}> =({readStatus, clicked})=> {
    return (
        <TouchableOpacity onPress={clicked}>
            <View style={styles.parent}>
                <View style={[styles.detailsHolder,{backgroundColor: OFFICIAL_WHITE}]}>
                <Ficon name="circle" size={15} color={OFFICIAL_GREEN} style={styles.onlineStatus}/>

                    <Image 
                        source={require('../assets/Seline_profile_img.jpg')} 
                        style={styles.image}/> 
                        <View style={styles.nameholder}>
                            <Text style={styles.name}>Paul Loom</Text>
                            <Text style={styles.subtext}>Call me back later,Can you compare the content of</Text>
                        </View>
                        <Text style={styles.time}>10:44</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    parent:{
        marginTop:20
    },
    image:{
        width: 60,
        height: 60,
        borderRadius: 100,
        marginLeft:10,
        zIndex:100
    },
    detailsHolder:{
        flexDirection:"row",
        borderWidth:1,
        marginLeft:20,
        marginRight:20,
        paddingTop:15,
        paddingBottom:10,
        borderRadius:50,
        borderColor:OFFICIAL_GRAY,
        
        // justifyContent:'space-between'
    },
    nameholder:{
        padding:10
    },
    name:{
        fontWeight:"bold",
        fontSize:18
    },
    subtext:{
        paddingRight:100
    },
    time:{
        position:"absolute",
        right:20,
        top:10
    },
    onlineStatus:{
        position:'absolute',
        left:60,
        top:18,
        zIndex:10
    }
})
export default ChatListItem;