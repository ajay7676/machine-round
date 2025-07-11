import { call, put, takeEvery } from "redux-saga/effects"
import { fetchUsersFailed, fetchUsersSuccess } from "./userSlice";

 function* getUsersFromApi(){
     console.log("Button Clicked")
     try {
        const res = yield call(() => fetch('https://jsonplaceholder.typicode.com/users'));
         const data = yield res.json();
          yield put(fetchUsersSuccess(data)); // Success
        
     } catch (error) {
        yield put(fetchUsersFailed(error.message)); // Failed
        
     }
 }
 
 export function* userSaga (){
     yield takeEvery('user/fetchUsersPending' ,getUsersFromApi )

 }