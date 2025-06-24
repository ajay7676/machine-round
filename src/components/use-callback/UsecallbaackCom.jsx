import React, { useCallback, useState } from 'react';
import Header from './Header';

const UsecallbaackCom = () => {
    const [count, setCount] = useState(0)
    const newFun = useCallback(() => {

    } ,[])
  return (
     <>
        <div className='w-full h-screen flex justify-center items-center'>
         <div className="card flex  flex-col justify-center items-center bg-white text-slate-700  w-[500px] min-h-[450px] rounded-2xl p-5">
            <h2 className='py-9 text-3xl'>useCallback</h2>
            <Header newFun={newFun} />
            <div className='my-5'>
                <button  onClick={() => setCount( prev => prev+1)} className='bg-green-500 my-5 mt-5'>Click Me</button>
            </div>
            <h2 className='py-9 text-xl'>Count: {count}</h2>
         </div>
    </div> 
       </>
  )
}

export default UsecallbaackCom