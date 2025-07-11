import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import counterReducer from '../components/react-saga/counterSlice'
import userReducer from '../components/react-saga/userSlice'
import {counterSaga} from '../components/react-saga/counterSaga';
import {userSaga} from '../components/react-saga/userSaga';

const sagaMiddleWare = createSagaMiddleware();

 const sagastore =  configureStore({
      reducer: {
        counter : counterReducer,
        user: userReducer

      },
      middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: false}).concat(sagaMiddleWare)

 })
    
 sagaMiddleWare.run(counterSaga)
 sagaMiddleWare.run(userSaga)

 export default sagastore;