import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user" ,
    initialState: {
        users: [],
        loading: false , 
        error : null
    },
    reducers: {
        fetchUsersPending : (state) => {
            state.loading = true;
        },
        fetchUsersSuccess: (state , action) => {
            state.loading = false;
            state.users = action.payload

        },
        fetchUsersFailed: (state , action ) => {
            state.loading = false;
            state.error = action.payload

        }

    }
})

export const {fetchUsersPending , fetchUsersSuccess , fetchUsersFailed} = userSlice.actions;


export default userSlice.reducer