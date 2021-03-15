import AsyncStorage from '@react-native-community/async-storage';
import React, {useReducer,useEffect,useContext, createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';
import { authReducer } from './reducers/authReducer';
import firestore from '@react-native-firebase/firestore';


export const SelineContext = createContext();

GoogleSignin.configure();

const  SelineContextProvider =(props)=>{
    const [loginStatus, dispatchLoginStatus] = useReducer(authReducer,{});
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const [currUser, setCurrUser] = useState({})
    const [user, setUser] = useState(null);
    const [userToken, setuserToken] = useState("")


    return(
        <SelineContext.Provider 
        value={{isLoggedIn,
            user,setUser,setisLoggedIn,
         loginStatus,  currUser,dispatchLoginStatus,  setCurrUser,
         userToken,
          }}>
            {props.children}
        </SelineContext.Provider>
    )

}
export default SelineContextProvider;