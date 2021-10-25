import React,{useEffect, useState} from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity,FlatList } from 'react-native'
import { OFFICIAL_GRAY, OFFICIAL_PINK } from '../utility/constants';
import SelineLikeRed from '../assets/seline_like_red.svg';
import {useSelector} from 'react-redux'

const { width, height } = Dimensions.get("window");
const size = Dimensions.get('window').width/2;

const Seliners = ({ item, navigation }: any) => {
    const { userData: { loading, allUsers } } = useSelector((state) => state);
    const [localUser, setLocalUser]= useState<any>([])
    const [selected, setselected]= useState<any>({})

    useEffect(() =>{
        setLocalUser(allUsers)
    },[])

    const handleLike=(item:any)=>{
        console.log('===', item)
        let index = localUser.findIndex((it:any) => it._id.toString() === item)
        let newArr = localUser.splice(index,1)
        setLocalUser(newArr)
    }
    const handleClicked=(item:any)=>{
        console.log(item)
        // navigation.navigate('selinerdetails')
        navigation.navigate('selinerdetails', { id: item._id, name: item.name,other:item })

    }

    return (
        <FlatList
            data={localUser}
            renderItem={({ item }) => (

                <View style={styles.userconatiner}>

                    <TouchableOpacity 
                    onPress={() => handleClicked(item)}>
                        <Image
                            source={{ uri: item.image }}
                            style={styles.image}
                        />
                    </TouchableOpacity>
                    <View style={styles.bar}>
                        <TouchableOpacity onPress={()=>handleLike(item._id)}>
                            <SelineLikeRed width={100} height={100} fill="red" style={styles.likeBut} />
                        </TouchableOpacity>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.address}>Paul</Text>
                    </View>


                </View>
            )}
            keyExtractor={item => item.id}
            numColumns={2} />

    )
}

const styles = StyleSheet.create({
    parent: {

    },
    image: {
        height: width * 0.5,
        width: width * 0.4,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginTop: 0
    },
    userconatiner: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'column',
        width:size,
    },
    bar: {
        width: width * 0.4,
        backgroundColor: OFFICIAL_PINK,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        marginBottom: 20,
    },
    name: {
        fontWeight: '600',
        padding: 5
    },
    address: {
        padding: 5,
        fontSize: 13
    },
    likeBut: {
        position: "absolute",
        right: -25,
        top: -43
    }
})
export default Seliners;