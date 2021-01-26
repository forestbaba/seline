import React from 'react'
import { View,Text, TouchableOpacity,Image,StyleSheet } from 'react-native';
import SelineBigHeart from '../assets/seline_big_heart.svg';
import SelineSmallHeart from '../assets/seline_small_heart.svg';
import WhiteRoundCornerButton from '../components/WhiteRoundCornerButton';
import { OFFICIAL_GRAY, OFFICIAL_RED, OFFICIAL_WHITE } from '../utility/constants';
const Matched =()=> {
    return (
        <View style={styles.parent}>
            <View  style={styles.talksContainer}>
                <Text style={styles.ntitle}>It's a match Ola!</Text>
                <Text style={styles.titlesub}>You and Ketiai have similar Minds</Text>
            </View>
            <View style={styles.parentV}>
                <View  style={styles.v1}>
                    <SelineSmallHeart />
                    <Image 
                    source={require('../assets/Seline_profile_img.jpg')} 
                    style={styles.image}/> 
                </View>
                <View style={styles.v2}>
                    <Image 
                        source={require('../assets/Seline_profile_img.jpg')} 
                        style={styles.image1}/> 
                        <SelineBigHeart height={100} width={100} style={styles.bigheart}/>
                </View>
                
            </View>
            <WhiteRoundCornerButton 
                title="Start a conversation" 
                color={OFFICIAL_RED} 
                textcolor={OFFICIAL_WHITE}
                style={styles.actionButt}/>
        </View>
    )
}

const styles = StyleSheet.create({
    parent:{
        flex:1,
        justifyContent:'space-around'
    },
    image:{
        width: 170,
        height: 170,
        borderRadius: 100,
        marginLeft:30,
        zIndex:100
    },
    image1:{
        width: 170,
        height: 170,
        borderRadius: 100,
        marginRight:-0,
        marginTop:-130

    },
    v1:{
        width:"80%",
    },
    v2:{
        width:"80%",
        alignItems:"flex-end",
        justifyContent:"space-around",
    },
    parentV:{
        justifyContent:'center',
        alignItems:'center'
    },
    bigheart:{
        marginTop:-50
    },
    actionButt:{
        width:"100%"
    },
    talksContainer:{
        justifyContent:'center',
        alignItems:'center'
    },
    ntitle:{
        fontSize:30,
        fontWeight:'500',
        color:OFFICIAL_RED
    },
    titlesub:{
        padding:20,
        fontSize:18,
        color:OFFICIAL_GRAY
    }
})
export default Matched;