import React from 'react'
import useToggle from './useToggle'

const ToggleBtn = () => {
    const {isOpenToggle , togglebtn} = useToggle();
  return (

    <>
      <div className='text-white text-3xl py-10 '>ToggleBtn</div>
      <button data-testid="toggle-btn" className='bg-blue-600 text-white' onClick={togglebtn}>{isOpenToggle ? "ON" : "OFF"}</button>

    </>

  )
}

export default ToggleBtn