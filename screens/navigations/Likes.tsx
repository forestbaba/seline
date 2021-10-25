import React,{useContext, useEffect, useState} from 'react';
import {Text, View, Image, Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Ficon from 'react-native-vector-icons/FontAwesome'
import firestore from '@react-native-firebase/firestore';
import { NavigationStackProp } from 'react-navigation-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { OFFICIAL_WHITE } from '../../utility/constants';
import SelineLike from '../../assets/seline_like_icon.svg';
import SelineUnlike from '../../assets/seline_unlike.svg';
import { SelineContext } from '../../context/SelineContext';
import { PlayContext } from '../../context/TestContext';

import { useDispatch, useSelector } from 'react-redux'
import { loadAllUsers } from '../../statemanagement/User/action';
interface LikesProps{
    // userslist 
    navigation:NavigationStackProp,
    item:object, 
    index:number,
    options:any
} 
interface itemz{
        item?:any,
        index:number
    }


const Likes:React.FC<LikesProps> =({ item, index})=> {

    const dispatch = useDispatch()
    const { userData: { loading, allUsers } } = useSelector((state) => state);

    // const {addOne} = useContext(PlayContext)


    // const { setisLoggedIn, currUser, setUser, user } = useContext(SelineContext)
    const { width, height } = Dimensions.get("window");
    // const [loading, setLoading] = useState(false)
    const navigation = useNavigation();

    useEffect(()=>{

        const initial =async()=>{
                 dispatch( loadAllUsers())

        }
         initial()
         if(allUsers && allUsers.length > 0){
             console.log('LLL', allUsers)
         }
    },[])

    const entries =[
        {key:1,name:"Kathrine Bale", age:25, address:"5, Femi Jefferson, Ogba"},
        {key:2,name:"Bisi Cole", age:27, address:"Oba Adeshinda road, Ibeju"},
        {key:3,name:"Randi SMith", age:22, address:"Bismuth avenue, Ikeja"},
        {key:4,name:"Silo Bane", age:33, address:"Basmuda kolar lane"},
        {key:5,name:"Yomi Slone", age:20, address:"Adura cresent"},
        {key:6,name:"Pasmuth Omia", age:22, address:"Olofin way, Victoria Island"},
        {key:7,name:"Agba Segun", age:39, address:"Runway close, Ikeja"},
        {key:8,name:"Dada James", age:29, address:"Ogo Oluwa Avenue, Ogba"},
    ]

    const handleAddOne =()=>{
    //    addOne()
    }
   const _renderItem = ({item, index}:itemz) => {

        return (
            <>
            <View style={styles.parent}>
                <View style={{padding:10, borderRadius:25}}>
                    <Image source={{uri: item.image}} 
                    // <Image source={require('../../assets/Seline_profile_img.jpg')} 
                    width={100} height={200}
                    style={styles.image}
                    />

                </View>
                <View style={styles.contain}>
                    <View style={styles.status}>
                        <Ficon name="circle" size={15} color={"green"}/>
                        <Text style={styles.name}>{ item.name } ,</Text>
                        <Text style={styles.age}>{item.age}</Text>
                    </View>
                     <Text style={styles.address}>{item.address}</Text>
                </View>
                
            </View>
            <View style={styles.useraction}> 
            <TouchableOpacity><SelineUnlike width={120} height={120} fill="black"/></TouchableOpacity>
            <TouchableOpacity><SelineLike width={105} height={105}/></TouchableOpacity>
            <TouchableOpacity onPress={ ()=> navigation.navigate('userslist')}>
            <View style={styles.overflowHolder}>
                {
                    entries.slice(3).map((item, index) =>{
                        return <Image source={require('../../assets/Seline_profile_img.jpg')} 
                        key={item.key} 
                        style={[styles.overflowImages,{width:index === 0 ? 50 : index== 1 ? 30 : index == 2 ? 10 : 0, 
                            height:index === 0 ? 50 : index== 1 ? 30 : index == 2 ? 10 : 0}]}/>
                    })
                }
            </View>
            </TouchableOpacity>
        </View>
        </>
        )
    
    }

    // if(loading){
    //     return <Text>Loading......</Text>
    // }
    // if(user.user){
        return (
            <View>
            <Carousel

              data={allUsers}
              renderItem={_renderItem}
              sliderWidth={width}
              itemWidth={width -50}
              activeSlideOffset={20}
            //   enableMomentum
            //   layoutCardOffset={50}
            />
            </View>
        );
    // }else{

        // return(
        //    <View style={styles.parent2}>
        //         <Text>Add Address</Text>
        //         <TouchableOpacity 
        //         onPress={handleAddOne}><Text>Call me</Text>
        //         </TouchableOpacity>

        //     </View> 
        // )
        
    //}
   
        

}

const styles = StyleSheet.create({
    parent:{
        marginTop:100,
        borderRadius:25,
        borderTopLeftRadius:100,
        // backgroundColor:"red"
        // padding:50
        // marginLeft:100,
        // marginRight:100
    },
    image:{
        borderRadius:25,
        width:'100%',
        height:'80%'
    },
    status:{
        flexDirection:'row',
        justifyContent:"space-around",
        alignItems:"center",
        width:"100%"
        // paddingLeft:20,
        
    },
    name:{
        fontSize:30,
        color:OFFICIAL_WHITE,
        textShadowColor: 'black', 
        textShadowOffset: { width: -1, height: 0 },
        textShadowRadius: 20, 
    },
    age:{
        fontSize:30,
        color:OFFICIAL_WHITE

    },
    contain:{
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        position:'absolute',
        bottom:15
    },
    address:{
        color:OFFICIAL_WHITE,
        marginTop:15,
        textShadowColor: 'black', 
        textShadowOffset: { width: -1, height: 0 },
        textShadowRadius: 20, 
    },
    useraction:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    overflowHolder:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
    },
    overflowImages:{
            width: 50,
            height: 50,
            borderRadius: 75
          
    },
    parent2:{
        flex:1,
        justifyContent:'center',
        alignItems:"center",
        marginTop:20
    }
})
export default Likes;