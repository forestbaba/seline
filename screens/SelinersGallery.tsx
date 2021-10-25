import React, { useState, useEffect } from 'react';
import { View, Image, Text, ScrollView, StyleSheet, Dimensions, TouchableOpacity, Animated, ImageBackground } from 'react-native'
import { OFFICIAL_RED } from '../utility/constants';
import AIcon from 'react-native-vector-icons/AntDesign';
import EIcon from 'react-native-vector-icons/Entypo';
import Gallery from 'react-native-image-gallery';


const itemsPerRow = 2;
const { width } = Dimensions.get("window");

const HEADER_EXPANDED_HEIGHT = 600;
const HEADER_COLLAPSED_HEIGHT = 60;

const { width: SCREEN_WIDTH } = Dimensions.get("screen")

const SelinerGallery = ({ navigation, route, name }) => {
   
    return (
            
                    <Gallery
        style={{ flex: 1, backgroundColor: 'black' }}
        images={[
          { source: require('../assets/Seline_profile_img.jpg'), dimensions: { width: 150, height: 150 } },
          { source: { uri: 'http://i.imgur.com/XP2BE7q.jpg' } },
          { source: { uri: 'http://i.imgur.com/5nltiUd.jpg' } },
          { source: { uri: 'http://i.imgur.com/6vOahbP.jpg' } },
          { source: { uri: 'http://i.imgur.com/kj5VXtG.jpg' } }
        ]}
      />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eaeaea',
    },
    scrollContainer: {
        padding: 16,
        paddingTop: HEADER_EXPANDED_HEIGHT
    },
    header: {
        backgroundColor: 'lightblue',
        position: 'absolute',
        width: SCREEN_WIDTH,
        top: 0,
        left: 0,
        zIndex: 9999
    },
    title: {
        marginVertical: 16,
        color: "black",
        fontWeight: "bold",
        fontSize: 24
    },
    row_image_align: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        marginBottom: 40
    },
    img_avatar: {
        width: SCREEN_WIDTH / 4,
        height: SCREEN_WIDTH / 4,
        margin: 5,
        borderRadius: 10

    },
    img_avatar2: {
        width: SCREEN_WIDTH / 2,
        height: SCREEN_WIDTH / 2,
        borderRadius: 10
    },
    col: {
        flexDirection: 'column',
        justifyContent: "space-around"
    },
    title_holder: {
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingTop: 20,
        paddingBottom: 20
    },
    view_all: {
        fontWeight: "bold",
        color: OFFICIAL_RED
    },
    gallery_container: {
        marginBottom: 20
    }
})
export default SelinerGallery;