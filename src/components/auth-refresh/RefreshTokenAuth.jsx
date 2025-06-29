import React, { useState } from "react";
import axiosInstance from "./axiosInstance";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../../feature/authSlice";

const RefreshTokenAuth = () => {
   const [email, setEmail] = useState("john@mail.com");
   const [password, setPassword] = useState("changeme");

   const dispatch = useDispatch();
   const navigate = useNavigate();
      
  const handleSubmit = async (e) => {
     e.preventDefault();
     try{
        const response = await axiosInstance.post(`/auth/login` , {email , password});
         console.log(response.data);
         dispatch(loginSuccess(response.data))
         navigate('/dashboard')

        return response;

     }catch(error){
      alert("Invalid login")
       console.log(error)
     }

  };
  console.log(`Email : ${email} " " , Password : ${password}`)
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="card flex  flex-col justify-center items-center  bg-login-form text-slate-700  w-[500px] min-h-[450px] rounded-2xl p-5">
        <form onSubmit={handleSubmit} className="w-full max-w-[90%] mx-auto">
          <div className="mb-4">
            <label htmlFor="email" className="text-2xl py-4 text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email..."
              value={email}
               onChange={(e) => setEmail(e.target.value)}
              className="block bg-white placeholder:text-md p-3 w-full h-12 border-gray-300 border-1 rounded-sm"
            />
            {/* {touched.email && errors.email && (
          <div className="error">{errors.email}</div>
        )} */}
          </div>

          <div>
            <label htmlFor="password" className="text-2xl py-4 text-gray-300">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block bg-white placeholder:text-md p-3 w-full h-12 border-gray-300 border-1 rounded-sm"
            />
            {/* {touched.password && errors.password && (
          <div className="error">{errors.password}</div>
        )} */}
          </div>

          <div className="flex items-center py-2 justify-center my-5">
            <button className="p-5 py-2 bg-green-400 rounded" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RefreshTokenAuth;
