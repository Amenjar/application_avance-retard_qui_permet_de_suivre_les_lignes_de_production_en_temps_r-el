import axios from "axios";
import { LOGIN, LOGOUT } from "../types/auth";

export const login = (user,Navigate) => async (dispatch) => {
    try {
      const res = await axios.post("/Auth/user/login", user);
      
      dispatch({ type: LOGIN, payload: res.data });
      console.log("user : ",res.data);
        Navigate("/Profile")  
    } catch (error) {
      console.log(error);
    }
  };
  export const logout = (Navigate) => {
    Navigate("/")
    return {
      type: LOGOUT,
    };
  };