import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import Header from './Header';

const RefreshRoute = ({children}) => {
    const {token}  = useSelector((store) => store?.auth);
  
   return  token ? <>
   <Header />
   {children}
   </> : <Navigate  to="/"/>
}

export default RefreshRoute