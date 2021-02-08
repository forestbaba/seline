import AsyncStorage from '@react-native-community/async-storage';
import React, {useReducer,useEffect,useContext, createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';


export const SelineContext = createContext();

GoogleSignin.configure();

const  SelineContextProvider =(props)=>{
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

  async function onAuthStateChanged(user) {

      console.log('FFFFFFFFF',user)
      if(user){
          setisLoggedIn(true)
      }else{
          setisLoggedIn(false)
      }
    setUser(user);
  }

  const  fetchUserDetails = async(user)=> {
    firestore().collection('Users')
    .where('email', '==', user)
    .get()
    .then( async querySnapshot => {
      if(querySnapshot.size === 0){

      }else{

      }

    });

    

  }

  

  const changeLoginStatus =(status)=>{
      console.log('==========home',)
      setisLoggedIn(status)
  }

    useEffect(() => {

        if(isLoggedIn){
            console.log('MMMMMMMMMMMMMMMMMM')
            
        }
       

        const check =async()=>{
            const isIn = await GoogleSignin.isSignedIn();
            const currentUser = await GoogleSignin.getCurrentUser();
        
            setisLoggedIn(isIn)
            console.log('GGGGGGGGGGGGGGG: ',Object.keys(currentUser.user))

            setTimeout(() => {
                GoogleSignin.signOut()
            }, 5000);
        }
     
      check();
      }, [isLoggedIn]);

    const checkIsLoggedIn=()=>{



    }

    return(
        <SelineContext.Provider
        value={{isLoggedIn,setisLoggedIn,changeLoginStatus, checkIsLoggedIn}}>
            {props.children}
        </SelineContext.Provider>
    )

}
export default SelineContextProvider;