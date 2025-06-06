import axios from "axios";
import React, { useState } from "react";
import Profile from "./Profile";
import { useNavigate } from "react-router-dom";

const AuthAuthorization = () => {
  const [email, setEmail] = useState("john@mail.com");
  const [pass, setPass] = useState("changeme");
  const navigate = useNavigate();

  const handleLoginBtn = async () => {
    const payload = {
      email: email,
      password: pass,
    };
    try {
      const response = await axios.post(
        "https://api.escuelajs.co/api/v1/auth/login",
        payload
      );
      localStorage.setItem(
        "platzi-token",
        JSON.stringify(response.data.access_token)
      );
      navigate("/profile");
      return response;
    } catch (error) {
      console.log(error);
      alert("Failed");
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center flex-col gap-20 ">
      <div className="w-full max-w-md mx-auto bg-blue-400 flex items-center justify-center flex-col gap-4 px-5 py-5 rounded-lg">
        <p className="">Login Page</p>
        <div>
          <p className="text-white">Email</p>
          <input
            type="email"
            className="border-[#ddd] border rounded-md px-2 py-2 "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <p className="text-white">Password</p>
          <input
            type="email"
            className="border-[#ddd] border rounded-md  px-2 py-2 placeholder:color:text-white"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <div className="">
          <button
            onClick={handleLoginBtn}
            className="border rounded-md shadow-md inline-block py-1.5 px-5 text-md bg-green-600 text-white cursor-pointer"
          >
            Login
          </button>
        </div>
        <div>
          {/* {
                updateData && (
                      <p className='text-white'> Email : {updateData.email}  && Pssword : {updateData.pass}</p>
                )
               } */}
        </div>
      </div>
    </div>
  );
};

export default AuthAuthorization;
