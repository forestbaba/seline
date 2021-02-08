import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem'
import data from './data'
import SwipeableViews from 'react-swipeable-views-native';
import BuildYourProfile from './profilesetup/BuildYourProfile';
import IdentifyYourself from './profilesetup/IdentifyYourself';
import AddRecoveryEmail from './profilesetup/AddRecoveryEmail';
import SecureYourAccount from './profilesetup/SecureYourAccount';
import { NavigationStackProp } from 'react-navigation-stack';

interface AccCarousel{
  item:number,
  navigation: NavigationStackProp;

}

const AccountCarousel:React.FC<AccCarousel> =({navigation}) =>{

    const [index, setIndex] = React.useState(0)
  const isCarousel = React.useRef(null)


  return (
    <View style={styles.parent}>
     <SwipeableViews style={styles.slideContainer}>
    <View style={[styles.slide, styles.slide1]}>
      <BuildYourProfile handlePress={()=>navigation.navigate('identify')}/>
    </View>
    <View style={[styles.slide, styles.slide2]}>
     <IdentifyYourself/>
    </View>
    <View style={[styles.slide, styles.slide3]}>
     <AddRecoveryEmail/>
    </View>
    <View style={[styles.slide, styles.slide3]}>
     <SecureYourAccount/>
    </View>
  </SwipeableViews>
    </View>

  )
}

const styles = StyleSheet.create({
    parent:{
        flex:1
    },
    slide: {
    padding: 15,
    minHeight: "100%",
    color: '#fff',
  },
  slideContainer: {
    height: "100%",
  },
  
  slide1: {
    height:"100%"
  },
  slide2: {
    // backgroundColor: '#B3DC4A',
  },
  slide3: {
    // backgroundColor: '#6AC0FF',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
})
export default AccountCarousel;