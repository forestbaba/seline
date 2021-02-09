import { GOOGLE_LOGIN,GOOGLE_LOGIN_SUCCESS,
    GOOGLE_LOGIN_FAILURE,CHANGE_LOGIN_STATUS,CHANGE_LOGIN_STATUS_FAILURE,CHANGE_LOGIN_STATUS_SUCCESS } from "../types";

export const authReducer =(state, action)=>{
    switch(action.type){
        case GOOGLE_LOGIN:
            return {...state,loading: true}
        case GOOGLE_LOGIN_SUCCESS:
            return {...state, loading: false, token: action.payload}

        case GOOGLE_LOGIN_FAILURE:
            return {...state, loading:false, token: null}

        case CHANGE_LOGIN_STATUS:
            return {...state, loading: true}
        
        case CHANGE_LOGIN_STATUS_SUCCESS:
            return{...state, loading: false, data: action.payload}

        case CHANGE_LOGIN_STATUS_FAILURE:
                return {...state, loading: false}
        default:
            return state
    }
}