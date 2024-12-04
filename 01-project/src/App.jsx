import React, { useState } from 'react'

export const App = () => {
  const [color, setColor] = useState("gray")
  return (
    <div className='w-full h-screen' style={{ backgroundColor: color }}>
      <div className='pt-9 flex justify-around cursor-pointer'>
        <div onClick={() => setColor("red")} className='h-[30px] w-[50px] bg-red-500 rounded-[5px] flex items-center justify-center text-white'>Red</div>

        <div onClick={() => setColor("yellow")} className='h-[30px] w-[50px] bg-yellow-500 rounded-[5px] flex items-center justify-center text-white'>Yellow</div>

        <div onClick={() => setColor("blue")} className='h-[30px] w-[50px] bg-blue-500 rounded-[5px] flex items-center justify-center text-white'>Blue</div>

        <div onClick={() => setColor("green")} className='h-[30px] w-[50px] bg-green-500 rounded-[5px] flex items-center justify-center text-white'>Green</div>

        <div onClick={() => setColor("orange")} className='h-[30px] w-[50px] bg-orange-500 rounded-[5px] flex items-center justify-center text-white'>Orange</div>

        <div onClick={() => setColor("teal")} className='h-[30px] w-[50px] bg-teal-500 rounded-[5px] flex items-center justify-center text-white'>Teal</div>
      </div>

    </div>
  )
}

