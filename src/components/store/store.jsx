import {configureStore} from '@reduxjs/toolkit'
import productReducer from '../slice/product/productSlice'
import authReducer from '../slice/auth/authSlice'
 const store = configureStore({
     reducer: {
        products : productReducer,
        auth: authReducer
     }
 })
  export default store;

