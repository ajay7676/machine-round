import React, { useReducer } from 'react'

const UserReducerComp = () => {
  const initaliState = {
     count: 0
  }
  const reducerFn = (state, action) =>{
       switch(action.type){
        case 'increase':{
          return { 
            count: state.count+1
          }
        }
        case 'decrease':{
          return { 
            count: state.count-1
          }
        }
        case 'input':{
          return { 
            count: state.action.payload
          }
        }
        default : {
           return state;
        }
       }
  }
  const[state,dispatch]= useReducer(reducerFn , initaliState);
  const handleIncreaseBtn = () =>{
     dispatch({
      type: "increase"
     })
  }
  const handleDecreaseBtn = () =>{
     dispatch({
      type: "decrease"
     })
  }
  return (
    <>
        <div className='w-full h-screen flex justify-center items-center'>
               <div className="card flex  flex-col justify-center items-center bg-white text-slate-700  w-[500px] min-h-[450px] rounded-2xl p-5">
                  <h2 className='py-9 text-3xl'>useReducer Commponent</h2>
                                    <h2 className='py-9 text-xl'>Count: {state.count}</h2>

                  <div className='my-5'>
                      <button  onClick={handleIncreaseBtn} className='bg-green-500 my-5 mt-5'>Increase</button>
                      <button  onClick={handleDecreaseBtn} className='bg-green-500 my-5 mt-5'>Decrease</button>
                  </div>
                  <div className="my-5 w-full">
                    <input  type='number'
                     value={state.count}
                     onChange={(e) => dispatch({
                      type: "input",
                      payload: Number(e.target.value)
                    }
                    )}
                    
                    id='number' className='border-1 px-4 text-sm bg-[#f2f2f2] border-gray-300 h-12 w-full text-black placeholder:text-black'/>

                  </div>
               </div>
          </div> 
    </>
  )
}

export default UserReducerComp 