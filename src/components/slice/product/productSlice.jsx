import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export  const fetchProducts = createAsyncThunk(
    'products/fetchProducts' , async( thunkAPI) => {
        try{
             const response = await axios.get('https://fakestoreapi.com/products');
               return response.data

        }catch(error){
             console.log( "" , error.message)
             return   thunkAPI.rejectWithValue(error.response?.data || error.message);
        }

    }
)
const productSlice = createSlice({
    name: "products",
    initialState : {
        products : [] ,
        loading : false ,
        error : null
        
    },
    reducers: {

    },
     extraReducers: (builder) => {
         builder.addCase (fetchProducts.pending , (state) => {
            state.loading  = true;
            state.error = null;
         })
         .addCase(fetchProducts.fulfilled, (state , action) => {
             state.loading = false;
             state.products = action.payload;
         })
         .addCase(fetchProducts.rejected , (state , action) => {
             state.loading = false;
            state.error = action.error.message
         }
        )
     }
})

export default productSlice.reducer