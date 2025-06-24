import React, { useState } from 'react'
import withCounter from './withCounter'

const ClickCounter = (props) => {
    const{count , incrementCount} = props;
  return (
    <div>
         <div className='flex flex-col justify-center items-center py-15'>
            <button className='w-full text-center py-5 text-white text-2xl max-w-50 mx-auto' onClick={incrementCount}>Click Me</button>
        <h2 className='w-full text-center py-5 text-white text-2xl'>count is : {count}</h2>
         </div>
    </div>
  )
}

export default withCounter(ClickCounter , 5)