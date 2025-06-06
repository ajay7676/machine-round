import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
    const token = localStorage.getItem("platzi-token");
    const navigate = useNavigate();
     const  logOutUser = () => {
      localStorage.removeItem("platzi-token");
      navigate("/")

   }
   
  return (
    <div className='h-10 border-b border-red-300 bg-blue-500 text-white flex justify-center items-center gap-5'>
        <Link to="/home" className='hover:border-b-2 hover:border-b-red-500'>Home</Link>
        <Link to="/profile" className='hover:border-b-2 hover:border-b-red-500'>Profile</Link>
        {
              token  ? 
            <Link to="/" onClick={logOutUser} className=' bg-red-500 text-white px-2 py-1 rounded-lg'>Logout</Link>: 
            <Link to="/" className='hover:border-b-2 hover:border-b-red-500'>Login</Link>

        }
    </div>
  )
}

export default Header