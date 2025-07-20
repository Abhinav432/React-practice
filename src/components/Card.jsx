import React from 'react'
import { IoMdStar } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";

const Card = (data) => {
  return (
      <div className="max-w-sm rounded-[23px] bg-slate-300 border-amber-100 border overflow-hidden shadow-lg m-4 w-[33%] h-[33%]">
        <img className="w-[330px] h-[300px] p-7 ml-6" src={data.image} alt={data.title} />
        <div className="px-6 py-4 border-t border-gray-200">
          <div className="font-light flex justify-between text-xl mb-2 ">
             {data.title}
             <p className='flex items-center text-yellow-500'>
             <IoMdStar/><IoMdStar/> 
              <IoMdStar/><IoMdStar/> 
              <IoMdStarOutline/> 
              </p>
             </div>
          <p className="text-gray-700 text-xl">
             {data.description}
          </p>
        </div>
        <div className="px-6 flex justify-between items-center py-2.5 ">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 "> ${data.price}</span>
          <span className='font-light text-gray-500'> {data.rating} </span>
        </div>
      </div>
   
  )
}

export default Card
