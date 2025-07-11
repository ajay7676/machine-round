import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {incrementAsync} from './counterSlice'
import { fetchUsersPending } from "./userSlice";

const ReactSagaComponent = () => {
   const counter = useSelector(store => store?.counter.value);
   const {users , loading , error} = useSelector(store => store?.user);
      
    const dispatch = useDispatch();
  return (
     <div className='w-full h-screen flex justify-center items-center'>
         <div className="card flex  flex-col justify-center items-center  bg-white text-slate-700  w-[500px] min-h-[450px] rounded-2xl p-2">
            <h2 className='py-9 text-3xl'>Counter : {counter}</h2>
           
             <div className='my-5'>
                 <button onClick={() => dispatch(incrementAsync())}  className='bg-green-500 my-5 mt-5'>Click Me</button>
             </div>
             <div className='p-5 flex flex-col bg-gray-400 rounded-2xl border-1 border-red-300'>
                  <h2 className='text-3xl'>User List (Redux-Saga)</h2>
                  
                  <button onClick={() => dispatch(fetchUsersPending())}>Fetch User</button>
                  {
                    loading && <h1>Data is Loding</h1> 
                  }
                  {
                    error &&  <p className='text-red-500'>Error : {error}</p>
                  }
                  
                  {
                    users &&
                    users.map((user) => (
                        <li key={user.id} className='text-white py-3'>{user.name}</li>
                    ))
                  }
             </div>
         </div>
    </div> 
  )
}

export default ReactSagaComponent