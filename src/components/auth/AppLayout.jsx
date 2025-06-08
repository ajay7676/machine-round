import React from 'react'
import Header from '../authentication/Header'
import {Outlet , Navigate} from 'react-router-dom'
import { useSelector } from 'react-redux';


const AppLayout = () => {
    const token = useSelector((state) => state.auth.token);
  return (
    <>
    
      {
         token ?
         <>
            <Header />
            <Outlet />
         </> : <Navigate  to="/" replace />
     }
    </>
  )
}

export default AppLayout