import React,{useState} from 'react';
import {View, Text, StyleSheet, Image,Switch} from 'react-native';
import { OFFICIAL_GRAY, OFFICIAL_RED, OFFICIAL_WHITE } from '../utility/constants';
import FIcon from 'react-native-vector-icons/Feather';
import { TextInput } from 'react-native-gesture-handler';

const ProfileOptionTextInput:React.FC<{title?:string}> =({title})=> {
    const [isEnabled, setIsEnabled] = useState<boolean>(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
    return (
            
                <View style={styles.parent}>
                    <View style={styles.rowcontainer}>
                          <Text style={styles.title}>{title}</Text>
                        <TextInput style={styles.textinput}/>
                    </View>
                </View>
                  
        )
}

const styles = StyleSheet.create({
    parent:{
        paddingRight:50
    },
    title:{
        textAlign:"left",
        paddingTop:10,
        paddingBottom:30,
        color:"gray"
    },
    rowcontainer:{
        flexDirection:'row',
        // justifyContent:"space-between",
        // alignItems:"flex-start",
        width:"100%",
        // marginTop:20,
        borderBottomWidth:1,
        marginLeft:30,
        marginRight:130,
        marginBottom:10
    
    },
    textinput:{
        padding:10,
        width:'100%',
        color:"#000",
        textAlign:'right',
        paddingRight:50,
    }
})
export default ProfileOptionTextInput;
