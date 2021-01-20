import React,{ReactNode} from 'react';
import {TouchableOpacity,Text, StyleSheet,Dimensions } from 'react-native';


const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

 const WhiteRoundCornerButton:React.FC<{title?: string,
     color?:string, textcolor?:string,marginTop?:number}> = ({title,color,textcolor, marginTop}) =>{
    return (
        <TouchableOpacity style={[styles.actionbutton,{backgroundColor:color, marginTop:marginTop}]}>
          <Text style={[styles.actionButtonText,{color:textcolor}]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
 
  actionbutton:{
  marginLeft:screenWidth * 0.1,
  marginRight:screenWidth *0.1,
  borderRadius:25
  
  
  },
  actionButtonText:{
    borderRadius:15,
    textAlign:"center",
    paddingTop:15,
    paddingBottom:15,
    fontSize:17,
    fontWeight:'bold',
    color:'#E7000E'
  },
  });
  
export default  WhiteRoundCornerButton;