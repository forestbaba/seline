import React,{useState} from 'react';
import {View, Text, StyleSheet, Image,Switch} from 'react-native';
import { OFFICIAL_RED, OFFICIAL_WHITE } from '../utility/constants';
import FIcon from 'react-native-vector-icons/Feather';
import ProfileOptionSwitch from '../components/ProfileOptionSwitch';
import ProfileOptionArrow from '../components/ProfileOptionArror';
import RoundCornerTextInput from '../components/RoundCornerTextInput';
import WhiteRoundCornerButtonBorder from '../components/WhiteRoundCornerButtonWithBorder'

const ProfileUpdate =({handlePress})=> {
    const [isEnabled, setIsEnabled] = useState<boolean>(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
    return (
        <View style={styles.parent}>
              <RoundCornerTextInput placeholder="firstname" width="100%"/>
              <RoundCornerTextInput placeholder="username" width="100%"/>
              <RoundCornerTextInput placeholder="Address" width="100%"/>
              <RoundCornerTextInput placeholder="Age" width="100%"/>
               
                {/* <ProfileOptionSwitch title={"Locate by id"}/>
                <ProfileOptionSwitch title={"Locate by Mobile Number"}/> */}

                <WhiteRoundCornerButtonBorder color={OFFICIAL_RED}
            handlePress={()=>navigation.navigate('secureaccount')}
             title="Update Profile" 
             textcolor="#FFF"/>
        </View>
    )
}

const styles = StyleSheet.create({
    parent:{
        flex:1,
        marginHorizontal:10
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
export default ProfileUpdate;