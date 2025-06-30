import React from 'react'

const Card = (data) => {
  return (
    <div className=' flex flex-col items-center justify-center bg-gray-600 p-10 border-amber-50 rounded-lg shadow-md size-48 hover:scale-50 transition-transform duration-300 ease-in-out   '>
    <img src={data.image} alt="logo" className=' bg-white rounded-[100px] border-2 size-48 ' />
    <h3 className='font-semibold m-3'> {data.name}</h3>
    
    </div>
  )
}

export default Card
