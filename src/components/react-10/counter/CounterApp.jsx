import React, { useState } from 'react'

const CounterApp = () => {
  const [counter, setCounter] = useState(0)
  
  return (
    <div className='w-full h-screen flex items-center justify-center'>
        <div className='flex flex-col items-center justify-center bg-white text-black rounded-md p-4  w-full max-w-[500px] h-[300px]'>
           <h1 className='text-4xl'>Counter :: {counter}</h1>
           <button onClick={() => setCounter(counter + 1)} className='my-4'>Increment</button>
           <button  onClick={() => setCounter(counter - 1)}   className='my-4'>Decrement</button>
        </div>
    </div>
  )
}

export default CounterApp