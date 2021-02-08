import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native';
import {USE_FROM_FACEBOOK, IDENTIFY_YOURSELF,OFFICIAL_RED, OFFICIAL_WHITE, INTRODUCE_YOURSELF} from '../../utility/constants';
import ProfileIconSvg from '../../assets/profileIconSvg.svg';
import WhiteRoundCornerButton from '../../components/WhiteRoundCornerButton';
import WhiteRoundCornerButtonBorder from '../../components/WhiteRoundCornerButtonWithBorder'
import { TextInput } from 'react-native-gesture-handler';
import RoundCornerTextInput from '../../components/RoundCornerTextInput';
import { NavigationStackProp } from 'react-navigation-stack';

interface Ident{
    navigation:NavigationStackProp
}
const IdentifyYourself:React.FC<Ident> =({navigation})=> {
    return (
        <View style={styles.parent}>
            <View style={styles.child1}>
                <Text style={styles.buildprofile}>{IDENTIFY_YOURSELF}</Text>
                <Text style={styles.buildprofiledesc}>{INTRODUCE_YOURSELF}</Text>
                <Text  style={styles.title}>I am a</Text>
                <View style={styles.genderHolder}>
                    <WhiteRoundCornerButtonBorder color={OFFICIAL_RED} title="Female"  textcolor="#FFF"/>
                    <WhiteRoundCornerButtonBorder color={OFFICIAL_RED} title="Male  "  textcolor="#FFF"/>
                </View>
                <Text  style={styles.title}>Birthday</Text>
                <View style={styles.inputholder}>
                    <RoundCornerTextInput placeholder="MM"/>
                    <RoundCornerTextInput placeholder="DD"/>
                    <RoundCornerTextInput placeholder="YYYY"/>
                </View>
                <Text style={styles.title}>Name</Text>
                <View style={styles.inputholder}>
                    <RoundCornerTextInput placeholder="Add your name here" width="90%"/>
                    
                </View>
            </View>
            <View style={styles.child2}>
            <WhiteRoundCornerButton
             color={OFFICIAL_RED}
             title="Add your photo"
              textcolor="#FFF"
              handlePress={()=> navigation.navigate('emailrecovery')}
              />

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
export default IdentifyYourself