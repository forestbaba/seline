// import React from 'react';
// import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

// const RandomThoughts =()=>{
//     return(
//         <View>
//             <Text>Random</Text>
//             <TouchableOpacity>
//                 <View style={styles.roundview}><Text style={styles.text}>4</Text></View>
//                 </TouchableOpacity>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     roundview:{
//         backgroundColor:'red',
//         borderRadius:100,
//         width:50,
//         height:50,
//         justifyContent:"center",
//         alignItems:'center'
//         // padding:20,
//     },
//     text:{
//         fontSize:25,
//         fontWeight:"bold",
//         color:"#FFF",
    
//         zIndex:5
//     }
// })
// export default RandomThoughts;


import React, { useCallback, useState } from "react";
import { StyleSheet, View } from "react-native";

import { AnimatedCircles } from './animation/AnimatedCircles.Component';

const  RandomThoughts =()=> {
    return <AnimatedCircles />;
  }
  export default  RandomThoughts;