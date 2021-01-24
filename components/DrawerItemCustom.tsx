import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

const DrawerItemCustom:React.FC<{title:string, counter?:string}> =({title, counter})=>{
    return(
        <View style={styles.parent}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.counter}>{counter}</Text>
        </View>
    )
}
const styles = StyleSheet.create({

    parent:{
        flexDirection:"row", 
        justifyContent:'space-between'
    },
    title:{
        color:"#FFF",
        fontWeight:'bold',
        fontSize:16
    },
    counter:{
        color:"#FFF"
    }
})

export default DrawerItemCustom;