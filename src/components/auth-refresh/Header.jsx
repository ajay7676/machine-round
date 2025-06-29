import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logOut } from '../../feature/authSlice';

const Header = () => {
     const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logOut())
        
    }

  return (
    <div className='flex justify-between items-center bg-[#fff] h-20 px-5 py-3'>
        <Link to="#">Navbar</Link>
        <div className='flex'>
             <button onClick={handleLogout}>Logout</button>
        </div>
    </div>
  )
}

export default Header