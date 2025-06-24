import React, { useContext } from 'react'
import UserContext from './UserContext'

const UseContextComp = () => {
   const context = useContext(UserContext);
    const {user ,count , increment ,number, setNumber ,result} = context
  return (
   
       <div className='w-full h-screen flex justify-center items-center'>
         <div className="card flex  flex-col justify-center items-center  bg-white text-slate-700  w-[500px] min-h-[450px] rounded-2xl p-5">
            <h2 className='py-9 text-3xl'>Name : {user.name} </h2>
            <h2 className='py-9 text-3xl'>Age : {user.age}</h2>
            <input  type='number' 
             value={number}
             onChange={(e) => setNumber(e.target.value)}
             id='number' className='border-1 px-4 text-sm bg-[#f2f2f2] border-gray-300 h-12 w-full text-black placeholder:text-black'/>
             <div className="my-5">
              <h2 className='py-9 text-3xl'>CubeNumer is : {result}</h2>
             </div>
             <div className='my-5'>
                 <button onClick={increment} className='bg-green-500 my-5 mt-5'>Click Me</button>
             </div>
             <h2 className='py-9 text-3xl'>Counter : {count}</h2>
         </div>
    </div> 
  )
}

export default UseContextComp