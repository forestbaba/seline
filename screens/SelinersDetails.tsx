import React, { useState, useEffect } from 'react';
import { View, Image, Text, ScrollView, StyleSheet, Dimensions, TouchableOpacity, Animated, ImageBackground } from 'react-native'
import { OFFICIAL_RED } from '../utility/constants';
import AIcon from 'react-native-vector-icons/AntDesign';
import EIcon from 'react-native-vector-icons/Entypo';

const itemsPerRow = 2;
const { width } = Dimensions.get("window");

const HEADER_EXPANDED_HEIGHT = 600;
const HEADER_COLLAPSED_HEIGHT = 60;

const { width: SCREEN_WIDTH } = Dimensions.get("screen")

const SelinerDetails = ({ navigation, route, name }) => {
    const HEADER_EXPANDED_HEIGHT = 600
    const HEADER_COLLAPSED_HEIGHT = 80

    const [scrollY, setscrollY] = useState(new Animated.Value(0))
    const { width: SCREEN_WIDTH } = Dimensions.get('screen')
    const [headerTitle, setHeaderTitle] = useState("")
    const [other, setOther] = useState<any>({})


    const headerHeight = scrollY.interpolate({
        inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
        outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
        extrapolate: 'clamp'
    });
    const headerTitleOpacity = scrollY.interpolate({
        inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
        outputRange: [0, 1],
        extrapolate: 'clamp'
    });
    const heroTitleOpacity = scrollY.interpolate({
        inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
        outputRange: [1, 0],
        extrapolate: 'clamp'
    });

    //   const headerTitle = {props.name}


    useEffect(() => {
        // let params = props.navigation;
        console.log('[[]]', route.params.other.image)
        setHeaderTitle(route.params.name)
        setOther(route.params.other)

    }, [])

    let m =[1,1,1,1,1,1,1,1,1,1,1,1]
    return (
        <View style={styles.container}>
            <Animated.View
                style={[styles.header, { height: headerHeight }]}>
                <ImageBackground
                    source={{ uri: other.image }}
                    style={{ width: '100%', height: '100%' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <AIcon name={'back'} color={OFFICIAL_RED} size={25} style={{ position: 'absolute', marginTop: 40, marginLeft: 20 }} />
                    </TouchableOpacity>
                    <Animated.Text style={{ textAlign: 'center', fontSize: 18, color: 'white', fontWeight: "bold", marginTop: 28, padding: 20, opacity: headerTitleOpacity }}>{headerTitle}</Animated.Text>
                    <Animated.Text style={{ textAlign: 'center', fontSize: 32, color: 'white', fontWeight: "bold", position: 'absolute', bottom: 16, left: 16, opacity: heroTitleOpacity }}>{headerTitle}</Animated.Text>
                </ImageBackground>
            </Animated.View>
            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                onScroll={Animated.event(
                    [{
                        nativeEvent: {
                            contentOffset: {
                                y: scrollY
                            }
                        }
                    }])
                }
                scrollEventThrottle={16}>
                <Text style={styles.title}>About</Text>
                <Text style={styles.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                recusandae alias error harum maxime adipisci amet laborum. Perspiciatis
                minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
                quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur
                fugiat, temporibus enim commodi iusto libero magni deleniti quod quam
                consequuntur! Commodi minima excepturi repudiandae velit hic maxime
                doloremque. Quaerat provident commodi consectetur veniam similique ad
                earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo
                fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore
                suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
                modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam
                totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam
                quasi aliquam eligendi, placeat qui corporis!</Text>

                <View style={styles.gallery_container}>
                    <View style={styles.title_holder}>
                        <Text>Gallery</Text>
                        <TouchableOpacity onPress={()=> navigation.navigate('selinergallery')}>
                            <Text style={styles.view_all}>view all</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row_image_align}>
                               {
                                m.slice(4).map(item =>{
                               return   <Image
                                source={require('../assets/Seline_profile_img.jpg')}
                                width={15}
                                height={15}
                                style={styles.img_avatar} />
                            })
                          
                       }
                    </View>
                   
                </View>
            </ScrollView>
            
        </View>
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
export default SelinerDetails;