import React,{useState} from 'react';
import {View, Text, StyleSheet, Image,TouchableOpacity} from 'react-native';
import { OFFICIAL_RED, OFFICIAL_WHITE } from '../utility/constants';
import FIcon from 'react-native-vector-icons/Feather';
import ProfileOptionSwitch from '../components/ProfileOptionSwitch';
import ProfileOptionArrow from '../components/ProfileOptionArror';

const Profile =(props:any)=> {
    const [isEnabled, setIsEnabled] = useState<boolean>(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
    return (
        <View style={styles.parent}>
            <View style={styles.contain}>
                <View style={styles.imageAndNameHolder}>
                    <Image 
                    source={require('../assets/Seline_profile_img.jpg')} 
                    style={styles.image}/> 

                    <View style={styles.containTwo}> 
                         <Text style={styles.name}>Ola Edwin</Text>
                         <TouchableOpacity onPress={props.navigation.navigate('ProfileUpdate')}>
                         <View style={styles.actionContainer}>
                            <FIcon name="user" size={20} color={OFFICIAL_WHITE}/>
                            <Text style={styles.title}>Edit Profile</Text>
                         </View>  
                         </TouchableOpacity>

                    </View>
                   
                </View> 
                <ProfileOptionSwitch title={"Get Notifications"}/>
                <ProfileOptionSwitch title={"Profile"}/>
                <ProfileOptionArrow title={"Account Settings"}/>
                <ProfileOptionArrow title={"Privacy Settings"} handlePress={() => props.navigation.navigate('Privacy Settings')}/>
                <ProfileOptionArrow title={"About us"}/>
                <ProfileOptionArrow title={"Log Out"}/>
                <ProfileOptionArrow title={"Delete Account"}/>
            
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    parent:{
        flex:1
    },
    image:{
        width: 100,
        height: 100,
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
    }
})
export default Profile;