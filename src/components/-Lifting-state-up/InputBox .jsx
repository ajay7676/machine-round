import React from 'react'

const InputBox  = ({text , setText}) => {
  return (
    <> 
     <h2>Input Box</h2>
     <input type='text'  value={text} onChange={(e) => setText(e.target.value)} className='border-1 border-gray-500 p-3 bg-[#eaeaea]' />
    </>
  )
}

export default InputBox 