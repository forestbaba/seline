import React,{ReactNode} from 'react';
import {TouchableOpacity,TextInput, StyleSheet,Dimensions } from 'react-native';
import {OFFICIAL_GRAY} from '../utility/constants'


const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

 const RoundCornerTextInput:React.FC<{placeholder?: string,width?:string,
     color?:string, textcolor?:string,
     placeholderTextColor?:string,
     handleOnChange?:(any:string)=>void,
     isSecure?:boolean
      maxLength?:number, onFocus?:any,value?:any}> = ({placeholder,width,isSecure,handleOnChange, color,textcolor, placeholderTextColor,maxLength,onFocus,value}) =>{
    return (
        <TextInput maxLength={maxLength} 
        placeholder={placeholder}
        value={value}
        onFocus={onFocus}
        secureTextEntry={isSecure}
        onChangeText={handleOnChange}
         style={[styles.roundCornerTextInput,
            {width:width}]}/>
    )
}

const styles = StyleSheet.create({
  roundCornerTextInput:{
    borderRadius:25,
    borderWidth:1,
    borderColor:OFFICIAL_GRAY,
    padding:15,
    paddingLeft:35,
    paddingRight:35,
    marginVertical:10,
}
  });
  
export default  RoundCornerTextInput;