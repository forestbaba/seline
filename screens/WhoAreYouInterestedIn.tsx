import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native';
import {USE_FROM_FACEBOOK, WHO_ARE_YOU_INTERESTED_IN,OFFICIAL_RED, OFFICIAL_WHITE, USE_EMAIL_FOR_SECURITY} from '../utility/constants';
import ProfileIconSvg from '../assets/profileIconSvg.svg';
import WhiteRoundCornerButton from '../components/WhiteRoundCornerButton';
import WhiteRoundCornerButtonBorder from '../components/WhiteRoundCornerButtonWithBorder'
import { TextInput } from 'react-native-gesture-handler';
import RoundCornerTextInput from '../components/RoundCornerTextInput';

import { NavigationStackProp } from 'react-navigation-stack';

interface WhoAre{
    navigation:NavigationStackProp
}

const WhoAreYouInterestedIn:React.FC<WhoAre> =({navigation})=> {
    
    return (
        <View style={styles.parent}>
            <View style={styles.child1}>
                <Text style={styles.buildprofile}>{WHO_ARE_YOU_INTERESTED_IN}</Text>
            </View>
            <View style={styles.child3}>
                <WhiteRoundCornerButtonBorder color={OFFICIAL_RED} title="Men" textcolor="#FFF" />
                <WhiteRoundCornerButtonBorder color={OFFICIAL_WHITE} title="Women" textcolor="#000"/>
                <WhiteRoundCornerButtonBorder color={OFFICIAL_WHITE} title="Everyone" textcolor="#000"/>
            </View>
            <View style={styles.child2}>
                <WhiteRoundCornerButton 
                handlePress={()=> navigation.navigate('main')}
                color={OFFICIAL_RED} title="Done" textcolor="#FFF"/>
            </View>
            
        </View>
    )
}

const styles= StyleSheet.create({
    parent:{
        flex:1.5,
        
        paddingLeft:20,
        paddingRight:20,
    },
    child1:{
        flex:0.5,
        width:"100%",
        justifyContent:"center",
        alignItems:'center',
        paddingLeft:20,
        paddingRight:20
    },
    child3:{
        flex:0.3,
        justifyContent:"space-between",
        marginLeft:20,
        marginRight:20
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
export default WhoAreYouInterestedIn