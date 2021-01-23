import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem'
import data from './data'
import SwipeableViews from 'react-swipeable-views-native';
import BuildYourProfile from './profilesetup/BuildYourProfile';

const AccountCarousel:React.FC<{item:number}> =() =>{

    const [index, setIndex] = React.useState(0)
  const isCarousel = React.useRef(null)


  return (
    <View style={styles.parent}>
     <SwipeableViews style={styles.slideContainer}>
    <View style={[styles.slide, styles.slide1]}>
      <BuildYourProfile/>
    </View>
    <View style={[styles.slide, styles.slide2]}>
      <Text style={styles.text}>
        slide n°2
      </Text>
    </View>
    <View style={[styles.slide, styles.slide3]}>
      <Text style={styles.text}>
        slide n°3
      </Text>
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
    backgroundColor: '#B3DC4A',
  },
  slide3: {
    backgroundColor: '#6AC0FF',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
})
export default AccountCarousel;