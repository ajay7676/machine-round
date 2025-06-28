import React, { useState } from 'react'
import InputBox from './InputBox '
import DisplayBox from './DisplayBox '

const LiftingStateUp = () => {
    const [text, setText] = useState("");

  return (
    <>
       <h2 className='text-white'>Lifting State Up Example</h2>
      <InputBox text={text}setText={setText} />
      <DisplayBox text={text} />

    </>
  )
}

export default LiftingStateUp;

// Lifting State Up in React means:
// 🔼 Moving state from child component to parent so that multiple child components can share and manage the same data.
//
