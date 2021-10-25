import React,{ReactNode} from 'react';
import {TouchableOpacity,Text, StyleSheet,Dimensions,ActivityIndicator } from 'react-native';
import { OFFICIAL_GRAY, OFFICIAL_RED } from '../utility/constants';


const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

 const WhiteRoundCornerButtonWithBorder:React.FC<{title?: string,
     color?:string, textcolor?:string,marginTop?:number, onPress?:any, loading?:boolean}> = ({title,color,textcolor, marginTop,onPress, loading}) =>{
    return (
      <>
        {
              loading ? (
                	<ActivityIndicator size="large" color={OFFICIAL_RED}  style={styles.spin}/>
              ) :(
<TouchableOpacity onPress={onPress}
        style={[styles.actionbutton,{backgroundColor:color, marginTop:marginTop}]}>
          <Text style={[styles.actionButtonText,{color:textcolor}]}>
          
                {title}
            </Text>
        </TouchableOpacity>
              )
              }
        </>
    )
}

const styles = StyleSheet.create({
 
  actionbutton:{
  // marginLeft:screenWidth * 0.1,
  // marginRight:screenWidth *0.1,
  borderRadius:25,
  borderColor:OFFICIAL_GRAY,
  borderWidth:0.5
  
  
  },
  actionButtonText:{
    borderRadius:15,
    textAlign:"center",
    padding:15,
    paddingLeft:40,
    paddingRight:40,
    fontSize:14,
    color:'#E7000E',
    fontWeight:"900"
  },
  spin:{
    alignSelf:"center",
    position:"relative"
  }
  });
  
export default  WhiteRoundCornerButtonWithBorder;