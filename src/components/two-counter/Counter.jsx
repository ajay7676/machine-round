import { useState } from "react";

const Counter = () => {
        const [counter , setCounter]=useState(15)

    const addValue = () => {

        if (counter < 50) {
                    setCounter(prev => prev + 1)
                    setCounter(prev => prev + 1)
                    setCounter(prev => prev + 1)
                    setCounter(prev => prev + 1)

        }
    }
    const removeValue = () =>{
        if(counter !== 0){
                    setCounter(prev => prev - 1)
        }

    }
  return (
    <>
     <h1 className="text-red-500 bg-gray-300">Counter value : {counter}</h1>
      <button onClick={addValue}>Add Value : {counter}</button>
      <br />
      <button onClick={removeValue}>remove value : {counter}</button>

      <p>{counter}</p>
    </>
  )
}

export default Counter