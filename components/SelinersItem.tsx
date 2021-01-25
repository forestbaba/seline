import React from 'react';
import {View, Text, StyleSheet, Image,Dimensions, TouchableOpacity} from 'react-native'
import { OFFICIAL_GRAY,OFFICIAL_PINK } from '../utility/constants';
import SelineLikeRed from '../assets/seline_like_red.svg';

    const { width, height } = Dimensions.get("window");

const Seliners =({item}:any)=> {

    return (
        <View style={styles.userconatiner}> 
        <Image 
            source={require('../assets/Seline_profile_img.jpg')} 
            style={styles.image}
        />  
        <View style={styles.bar}> 
        <TouchableOpacity>
            <SelineLikeRed width={100} height={100} fill="red" style={styles.likeBut}/>
        </TouchableOpacity>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.address}>{item.address}</Text>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    parent:{
        
    },
    image:{
        height:width *0.5,
        width:width *0.4,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        marginTop:20
    },
    userconatiner:{
        justifyContent:"center",
        alignItems:"center",
        flexDirection:'column'
    },
    bar:{
        width:width * 0.4,
        backgroundColor:OFFICIAL_PINK,
        borderBottomEndRadius:10,
        borderBottomStartRadius:10,
        marginBottom:20,
    },
    name:{
        fontWeight:'600',
        padding:5
    },
    address:{
        padding:5,
        fontSize:13
    },
    likeBut:{
        position:"absolute",
        right:-25,
        top:-43
    }
})
export default Seliners;