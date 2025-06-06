import React, { useState } from 'react'

const BgChanger = () => {
  const [color, setColor] = useState("olive")
  return (
    <div className='w-full relative h-screen' style={{backgroundColor: `${color}`}}>
      <div className='absolute bottom-15 left-[30%]'>
        <div className="flex rounded-full p-5 gap-5 justify-center w-100">
          <button className='rounded-4xl px-3 py-5 w-20 bg-red-600 text-white cursor-pointer' onClick={() => setColor("red")}>Red</button>
          <button className='rounded-4xl px-3 py-5 w-20 bg-green-600 text-white cursor-pointer' onClick={() => setColor("green")}>Green</button>
          <button className='rounded-4xl px-3 py-5 w-20 bg-yellow-600 text-white cursor-pointer'onClick={() => setColor("yellow")}>Yellow</button>
        </div>
      </div>
    </div>
  )
}

export default BgChanger