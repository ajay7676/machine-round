import React, {useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAuthor } from '../slice/auth/authSlice';
import {  useNavigate } from 'react-router-dom';


const AuthenticationCom = () => {
     const dispatch = useDispatch();
     const navigate = useNavigate()
    const  {token , error ,loading} = useSelector((store) => store?.auth);
     const [formData, setFormData] = useState({
          username: "mor_2314" , 
          password: "83r5^_"
     })

     const handleChange = (e) => {
         setFormData((prev => ({
            ...prev , [e.target.name] : e.target.value

         })))
     }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchAuthor(formData));
         navigate("/profile");

    }
     
  return (
    <>
     <div className='p-5 bg-gray-500 rounded-xl'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
        <input
          type='text'
          name="username"
          placeholder="Username"
         value={formData?.username}
          onChange={handleChange} />
        <br /><br />
        <input
          type="password"
          name="password"
          placeholder="Password"
           value={formData?.password}
          onChange={handleChange}
        /><br /><br />
         <div className='w-full text-center'>
            <button type='submit' className='bg-green-600  text-white py-2 px-5 rounded-md hover:bg-purple-950 font-medium transition  duration-1000  ease-in-ou cursor-pointer'>{loading ? "Loading ..." : "Login"}</button>
         </div>
         {
            token && <p style={{ color: 'white' }}>Login successful! Token:</p>
        }
        {error && <p style={{ color: 'red' }}>{error}</p>}
         
        </form>
     </div>
    </>

  )
}

export default AuthenticationCom