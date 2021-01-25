import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native'
import GridView from 'react-native-gridview';
import { OFFICIAL_PINK } from '../utility/constants';
import SelinersItem from '../components/SelinersItem'

const itemsPerRow = 2;
    const { width } = Dimensions.get("window");

const Seliners =(props:any)=> {

    const entries =[
        {name:"Kathrine Bale", age:25, address:"5, Femi Jefferson, Ogba"},
        {name:"Bisi Cole", age:27, address:"Oba Adeshinda road, Ibeju"},
        {name:"Randi SMith", age:22, address:"Bismuth avenue, Ikeja"},
        {name:"Silo Bane", age:33, address:"Basmuda kolar lane"},
        {name:"Yomi Slone", age:20, address:"Adura cresent"},
        {name:"Pasmuth Omia", age:22, address:"Olofin way, Victoria Island"},
        {name:"Agba Segun", age:39, address:"Runway close, Ikeja"},
        {name:"Dada James", age:29, address:"Ogo Oluwa Avenue, Ogba"},
    ]
    return (
        <View style={{marginTop:80}}>
            <GridView
             data={entries}
            dataSource={props.randomizeRows ? dataSource : null}
            itemsPerRow={itemsPerRow}
            renderItem={(item):any => {
        return (<SelinersItem item={item}/>);
      }}
    />
        </View>
    )
}

export default Seliners;