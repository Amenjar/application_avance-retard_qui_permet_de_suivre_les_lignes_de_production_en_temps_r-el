import { LOGIN, LOGOUT } from "../types/auth";

const initialState = {
    user:null,
    errors:null,
    auth:false,
    token:null,
}

const AuthReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    
    case LOGIN:  
        localStorage.setItem("token",payload.user)
        return{...state,user:payload.found,auth:true,errors:null}
    
    case LOGOUT :
        localStorage.removeItem("token")
        return{...state,user:null,auth:false}
    

    default:
        return state
    }
}

export default AuthReducer;