import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

 
export const  fetchAuthor = createAsyncThunk("auth/fetchAuthor" , async({username , password} ,thunAPI) => {
      try{
         const response = await axios.post('https://fakestoreapi.com/auth/login', {
            username ,
            password
         })
         console.log(response.data);
         return response.data

      }catch (error){
        console.log("Errr...." , error)
        return   thunAPI.rejectWithValue(error.response?.data || error.message)

      }

} ) 

const initialState  = {
    user: null,
    token: localStorage.getItem('auth-token'),
    loading: false,
    error: null,
      
 }
const authSlice = createSlice({
      name: "auth",
      initialState ,
      reducers:{
         logout : (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem('auth-token');
         }

      },
      extraReducers: (builder) => {
        builder.addCase(fetchAuthor.pending , (state) => {
             console.log("1")
             
              state.loading = true;
              state.error = null;
        })
        .addCase(fetchAuthor.fulfilled, (state , action) => {
                console.log("2")
               state.loading = false;
               state.token = action.payload.token;
               state.user = {usrname : action.meta.arg.username}
                localStorage.setItem('auth-token', action.payload.token);

        })
        .addCase(fetchAuthor.rejected , (state , action) => {
             console.log("3")
            state.loading = true;
            state.error = action.payload
        })
      }
})
export const {logout} = authSlice.actions

export default authSlice.reducer