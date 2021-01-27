import React,{useState} from 'react';
import {View, Text, StyleSheet,TouchableOpacity, Image,Switch} from 'react-native';
import { OFFICIAL_RED, OFFICIAL_WHITE } from '../utility/constants';
import FIcon from 'react-native-vector-icons/AntDesign';
import ProfileOptionSwitch from '../components/ProfileOptionSwitch';
import ProfileOptionArrow from '../components/ProfileOptionArror';
import ProfileOptionTextInput from '../components/ProfileOptionTextInput';

const ProfileEdit =()=> {
    const [isEnabled, setIsEnabled] = useState<boolean>(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
    return (
        <View style={styles.parent}>
            <View style={styles.contain}>
                <View style={styles.imageAndNameHolder}>
                    <Image 
                    source={require('../assets/Seline_profile_img.jpg')} 
                    style={styles.image}/> 
                    <TouchableOpacity style={styles.butt}>
                         <FIcon name="pluscircle" color={OFFICIAL_RED} size={25} style={styles.iconer}/>
                     </TouchableOpacity>
                </View> 
                <ProfileOptionTextInput title={"Name"}/>
                <ProfileOptionTextInput title={"Email"}/>
                <ProfileOptionTextInput title={"Phone"}/>
                <ProfileOptionTextInput title={"Gender"}/>
                <ProfileOptionTextInput title={"Date of birth"}/>
                
                
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    parent:{
        flex:1
    },
    image:{
        width: 150,
        height: 150,
        borderRadius: 100,
        marginLeft:10,
        zIndex:100,
        borderWidth:3,
        borderColor:OFFICIAL_WHITE
    },
    imageAndNameHolder:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:"center"
    },
    contain:{
        flex:1,
        marginTop:50
    },
    containTwo:{
        padding:20
    },
    name:{
        color:OFFICIAL_RED,
        fontSize:25,
        fontWeight:"bold"
    },
    actionContainer:{

        flexDirection:"row",
        backgroundColor:OFFICIAL_RED,
        padding:5,
        borderRadius:25
    },
    title:{
        color:OFFICIAL_WHITE,
        paddingLeft:5,
        paddingTop:2
    },
    rowcontainer:{
        flexDirection:'row',
        justifyContent:"space-around",
        width:"100%"
    },
    iconer:{
        // position:"absolute",
        zIndex:1000,
        marginTop:75,
        marginLeft:-20
    },
    butt:{
        zIndex:2000
    }
})
export default ProfileEdit;