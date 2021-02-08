import React from 'react'
import { View,Text,StyleSheet } from 'react-native';
import SelineDeleteIcon from '../assets/Seline_Delete_Icon.svg';
import WhiteRoundCornerButton from '../components/WhiteRoundCornerButton';
import WhiteRoundCornerButtonWithBorder from '../components/WhiteRoundCornerButtonWithBorder';
import { OFFICIAL_GRAY, OFFICIAL_RED, OFFICIAL_WHITE } from '../utility/constants';

const DeleteProfile =()=> {
    return (
        <View style={styles.parent}>
            <SelineDeleteIcon width={100} height={100} fill={OFFICIAL_WHITE}/>
            <Text style={styles.question}>Are you sure</Text>
            <Text style={styles.texty}> If you delete your account, you will lose all your profile, messages, photos, and your matches</Text>
            <Text style={styles.texty}>Are you sure you want to delete your account</Text>
            <View style={styles.buttonCont}>
                <WhiteRoundCornerButton title="confirm" color={OFFICIAL_RED} textcolor={OFFICIAL_WHITE}/>
                <WhiteRoundCornerButton title="cancel" color={OFFICIAL_WHITE} textcolor={OFFICIAL_GRAY} style={styles.cancelButt}/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    parent:{
        flex:1,
        justifyContent:"center",
        alignItems:'center'
    },
    question:{
        fontSize:35,
        color:OFFICIAL_RED,
        paddingTop:15,
        paddingBottom:15
    },
    buttonCont:{
        width:"100%",
        justifyContent:'space-around',
        flex:0.2,
    },
    cancelButt:{
        marginTop:20
    },
    texty:{
        paddingTop:20,
        paddingBottom:20,
        paddingLeft:30,
        paddingRight:30
    }
})
export default DeleteProfile;