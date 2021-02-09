import React, { useContext, useEffect } from 'react'
import { View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import { SelineContext } from '../context/SelineContext';
import { OFFICIAL_RED } from '../utility/constants';
// import SplashScreen from 'react-native-splash-screen'

 const LoaderScreen =({navigation})=> {

    const { setisLoggedIn,isLoggedIn, currUser, setUser, user } = useContext(SelineContext)


    // useEffect(()=>{

    //     console.log('=====***=====', currUser)
    //     if(!currUser){
    //         setisLoggedIn(false)
    //         setTimeout(() => {
            
    //             navigation.replace('loginprompt')
                            

    //         }, 2000);
    //     }
    // },[])
    
        return (
            <View style={styles.parent}>
                <ActivityIndicator size="large" color={OFFICIAL_RED}/>
            </View>
        )
}

const styles = StyleSheet.create({
    parent:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})

export default LoaderScreen;