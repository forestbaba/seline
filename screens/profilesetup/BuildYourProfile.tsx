import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native';
import {BUILD_YOUR_PROFILE_DESCRIPTION,USE_FROM_FACEBOOK, BUILD_YOUR_PROFILE,OFFICIAL_RED} from '../../utility/constants';
import ProfileIconSvg from '../../assets/profileIconSvg.svg';
import WhiteRoundCornerButton from '../../components/WhiteRoundCornerButton';

interface Bup{
    handlePress: ()=>void
}
const BuildYourProfile:React.FC<Bup> =({handlePress})=> {
    return (
        <View style={styles.parent}>
            <View style={styles.child1}>
                <ProfileIconSvg width="150" height="150"/>
                <Text style={styles.buildprofile}>{BUILD_YOUR_PROFILE}</Text>
                <Text style={styles.buildprofiledesc}>{BUILD_YOUR_PROFILE_DESCRIPTION}</Text>
            </View>
            <View style={styles.child2}>
                <WhiteRoundCornerButton color={OFFICIAL_RED} 
                handlePress={handlePress}
                title="Add your photo" textcolor="#FFF"/>
                <TouchableOpacity>
                                    <Text style={styles.usefromfacebook}>{USE_FROM_FACEBOOK}</Text>

                </TouchableOpacity>
            </View>
            
        </View>
    )
}

const styles= StyleSheet.create({
    parent:{
        flex:1,
        
        paddingLeft:20,
        paddingRight:20
    },
    child1:{
        flex:0.5,
        justifyContent:"center",
        alignItems:'center',
        paddingLeft:20,
        paddingRight:20
    },
    child2:{
        flex:0.5,
        justifyContent:"flex-end",
        // alignItems:'center',
        paddingLeft:20,
        paddingRight:20,
        width:"100%",
        marginBottom:20
    },
    usefromfacebook:{
        textAlign:'center',
        color:OFFICIAL_RED,
        paddingTop:10,
        paddingBottom:10
    },
    buildprofile:{
        fontSize:40,
        paddingTop:10,
        paddingBottom:10,
        color:OFFICIAL_RED
    },
    buildprofiledesc:{
        color:"#282F39",
        textAlign:'center'
    }
})
export default BuildYourProfile;