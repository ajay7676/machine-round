import { delay, put, takeEvery } from "redux-saga/effects";
import {increment} from './counterSlice'

 function* handleIncrementAsync (){
     console.log("Saga is working")
    yield delay(3000);
    yield put (increment())

}

export function* counterSaga(){
     yield takeEvery('counter/incrementAsync' , handleIncrementAsync)
}