import { createSlice } from "@reduxjs/toolkit";
// import { jwtDecode } from "jwt-decode";
const token = localStorage.getItem("auth-ref-token");

 const authSlice = createSlice({
     name: "auth" ,
     initialState: {
        token : token || null,
        user:  null ,
        error : null
     },
     reducers: {
        loginSuccess : (state , action) => {
             state.token = action.payload;
             state.user = action.payload;
             localStorage.setItem("auth-ref-token" , JSON.stringify(action.payload))
        },
        logOut:(state) => {
            state.token = null;
            state.user = null;
            localStorage.removeItem("auth-ref-token");
        }

     }
 })
  export const {loginSuccess , logOut} = authSlice.actions;

 export default authSlice.reducer;