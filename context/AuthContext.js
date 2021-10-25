import React from 'react';

export const AuthContext = React.createContext();


export const initialLoginState={
    isLoading: true,
    userName: null,
    userToken: null
  }

 export const loginreducer =(prevState, action)=>{
    switch( action.type){
      case "RETRIEVE_TOKEN":
        return {
          ...prevState, 
          userToken: action.token,
          isLoading:false
        };
      case "LOGIN":
        return {
          ...prevState, 
          userName: action.id,
          userToken: action.token,
          isLoading:false
        };
      case "LOGOUT":
        return {
          ...prevState, 
          userName: null,
          userToken: null,
          isLoading:false
        };
      case "REGISTER":
        return {
          ...prevState, 
          userName: action.id,
          userToken: action.token,
          isLoading:false
        };
    }
  }

const AuthProvider =(props)=>{
    const [loginState, dispatch] = React.useReducer(loginreducer, initialLoginState);

   const signIn = async () =>{
        let username='userx'
        let userToken;
        userToken = null
  
        try {
          userToken = 'kjdfkk'
           await AsyncStorage.setItem('userToken',userToken)
          
        } catch (error) {
          console.log(error)
        }
  
          console.log('Handle login')
          dispatch({type:"LOGIN", id:username, token: userToken})
    }

      const signOut =async() =>{
        console.log('Handle sign out')
  
        try {
           await AsyncStorage.removeItem('userToken')
          
        } catch (error) {
          console.log(error)
        }
          dispatch({type:"LOGOUT"})
      }

      const signUp =() => {
        console.log('Handle sign up')
      }

    return(
        <AuthContext.Provider>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;