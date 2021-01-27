import React,{useState} from 'react';
import {View, Text, StyleSheet, Image,Switch} from 'react-native';
import { OFFICIAL_RED, OFFICIAL_WHITE } from '../utility/constants';
import FIcon from 'react-native-vector-icons/Feather';

const ProfileOptionSwitch:React.FC<{title?:string}> =({title})=> {
    const [isEnabled, setIsEnabled] = useState<boolean>(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
    return (
            
                <View style={styles.rowcontainer}>
                        <Text style={styles.title}>{title}</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                            
                            style={styles.switch}
                        />
                    </View>
        )
}

const styles = StyleSheet.create({
    title:{
        textAlign:"left",
        width:"70%",
        padding:10
    },
    rowcontainer:{
        flexDirection:'row',
        justifyContent:"space-around",
        alignItems:"flex-start",
        width:"100%",
        marginTop:20
    },
    switch:{
        height:30
    }
})
export default ProfileOptionSwitch;