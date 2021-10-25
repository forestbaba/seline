import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import RoundCornerTextInput from '../../components/RoundCornerTextInput';
import WhiteRoundCornerButtonWithBorder from '../../components/WhiteRoundCornerButtonWithBorder';

 const ForgotPassword =()=> {
    return (
        <View style={styles.parent}>
            <Text style={styles.title}>Reset Password</Text>
            <RoundCornerTextInput placeholder={"Email"}
                width={"100%"}
                textcolor="black"
                />

<WhiteRoundCornerButtonWithBorder
        color={"red"}
        textcolor={"white"}
         marginTop={20}
        title="Reset"
      />
        </View>
    )
}

const styles = StyleSheet.create({
    title:{

        fontSize:30,
        fontWeight:"bold",
      
    },
    parent:{
        flex:1,
        padding:20,
        justifyContent:'center',
    }
})
export default ForgotPassword;