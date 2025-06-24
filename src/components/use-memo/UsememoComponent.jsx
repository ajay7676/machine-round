import React, { useMemo, useState } from 'react'

const UsememoComponent = () => {
    const [number, setNumber] = useState(0)
    const [counter, setCounter] = useState(0)
   const cubeNumber =(num) =>{
     console.log("Calculation done !");
     return Math.pow(num , 3)

}
//   const result = cubeNumber(number)
    const result = useMemo(() => 
         cubeNumber(number)
    ,[number])
  return (
    <div className='w-full h-screen flex justify-center items-center'>
         <div className="card flex  flex-col justify-center items-center  bg-white text-slate-700  w-[500px] min-h-[450px] rounded-2xl p-5">
            <h2 className='py-9 text-3xl'>Cube of the Number : {result}</h2>
            <input  type='number' 
             onChange={(e) => setNumber(e.target.value)}
             id='number' className='border-1 px-4 text-sm bg-[#f2f2f2] border-gray-300 h-12 w-full text-black placeholder:text-black'/>
             <div className='my-5'>
                 <button onClick={() => setCounter(counter+1)} className='bg-green-500 my-5 mt-5'>Click Me</button>
             </div>
             <h2 className='py-9 text-3xl'>Counter : {counter}</h2>
         </div>
    </div> 
  )
}

export default UsememoComponent