import React from 'react'
import  './toggle.password.css'
import { LuEye ,LuEyeOff  } from "react-icons/lu";




const TogglePassword = () => {
  return (
    <>
      <div className="container">
      <h1 className="title">Toggle Password</h1>
      <div className="password-wrapper">
        <input
          type="text"
          id="password"
          placeholder="Enter password"
          className="password-input"
          data-testid="password-input"
        />
        <span
          className="icon"
          data-testid="toggle-icon"
        >
          <LuEye  />
        </span>
      </div>
      <span className="visibility-label" data-testid="visibility-label">
        Password Hidden
      </span>
    </div>
    </>
  )
}

export default TogglePassword