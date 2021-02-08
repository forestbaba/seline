import React,{ReactNode} from 'react';
import {TouchableWithoutFeedback,TouchableOpacity,
   Text, StyleSheet,Dimensions,GestureResponderEvent, Animated,Easing } from 'react-native';

// type Props={
//   onPress: (event: GestureResponderEvent) => void
// }
interface theProps{
  title?: string,
  color?:string,
  textcolor?:string,
  marginTop?:number,
  handlePress?:(event: GestureResponderEvent)=>void
}
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

 const WhiteRoundCornerButton:React.FC<theProps> = ({title,color,textcolor, marginTop,handlePress}) =>{

  let scaleValue = new Animated.Value(0); // declare an animated value
  const cardScale = scaleValue.interpolate({ inputRange: [0, 0.5, 1],outputRange: [1, 1.1, 1.2] });

  let transformStyle = { transform: [{ scale: cardScale }] };

    return (
        <TouchableWithoutFeedback
        onPressIn={() => {
          scaleValue.setValue(0);
          Animated.timing(scaleValue, {
            toValue: 1,
            duration: 250,
            easing: Easing.linear,
            useNativeDriver: true
          }).start();
          }}
        onPressOut={() => {
          Animated.timing(scaleValue, {
            toValue: 0,
            duration: 100,
            easing: Easing.linear,
            useNativeDriver: true
          }).start();
        }}
        >
        <TouchableOpacity
        onPress={handlePress}
        style={[styles.actionbutton,{backgroundColor:color, marginTop:marginTop}]}>
          <Text style={[styles.actionButtonText,{color:textcolor}]}>{title}</Text>
        </TouchableOpacity>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
 
  actionbutton:{
  marginLeft:screenWidth * 0.1,
  marginRight:screenWidth *0.1,
  borderRadius:25,
  
  
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