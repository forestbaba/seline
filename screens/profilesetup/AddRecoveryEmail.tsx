import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native';
import {USE_FROM_FACEBOOK, ADD_RECOVERY_EMAIL,OFFICIAL_RED, OFFICIAL_WHITE, USE_EMAIL_FOR_SECURITY} from '../../utility/constants';
import ProfileIconSvg from '../../assets/profileIconSvg.svg';
import WhiteRoundCornerButton from '../../components/WhiteRoundCornerButton';
import WhiteRoundCornerButtonBorder from '../../components/WhiteRoundCornerButtonWithBorder'
import { TextInput } from 'react-native-gesture-handler';
import RoundCornerTextInput from '../../components/RoundCornerTextInput';

const AddRecoveryEmail:React.FC<{}> =()=> {
    return (
        <View style={styles.parent}>
            <View style={styles.child1}>
                <Text style={styles.buildprofile}>{ADD_RECOVERY_EMAIL}</Text>
                <Text style={styles.buildprofiledesc}>{USE_EMAIL_FOR_SECURITY}</Text>
                
                <Text style={styles.title}>Email</Text>
                <View style={styles.inputholder}>
                    <RoundCornerTextInput placeholder="userx@gmail.com" width="90%"/>
                    
                </View>
            </View>
            <View style={styles.child2}>
            <WhiteRoundCornerButton color={OFFICIAL_RED} title="Add your photo" textcolor="#FFF"/>

                <TouchableOpacity>
                     <Text style={styles.skip}>Skip</Text>

                </TouchableOpacity>
            </View>
            
        </View>
    )
}

const styles= StyleSheet.create({
    parent:{
        flex:1,
        
        paddingLeft:20,
        paddingRight:20,
        paddingTop:50
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
    skip:{
        textAlign:'center',
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
        textAlign:'center',
        paddingTop:20,
        paddingBottom:20
        
    },
    genderHolder:{
        flexDirection:'row',
        width:"100%",
        justifyContent:"space-around"
    },
    roundCornerTextInput:{
        borderRadius:25,
        borderWidth:2,
        borderColor:'red',
        padding:10,
        paddingLeft:20,
        paddingRight:20
    },
    inputholder:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    title:{
        width:"100%",
        textAlign:"left",
        padding:20,
        color:OFFICIAL_RED
    }
})
export default AddRecoveryEmail