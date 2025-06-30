import React, { useState } from "react";
useState
function main(){

     const [name, setName] = useState('abhinav')

  const changeName = () => {
    setName('thakur')
    console.log('name changed')
  }
  

  const [Num, setNum] = useState(0) 
  
    return ( 
     <div className="  h-screen bg-zinc-200 text-cyan-400 text-2xl p-4">
         <h3 className='bg-amber-600 underline text-white'>this only for check </h3>
      <h1 className='text-amber-500 text-3xl font-bold'>
        hello about my life <strong className='text-7xl text-rose-400'>{name}</strong> 
      </h1>
      <button className='underline text-amber-500' onClick={changeName}>change name</button>

      <h2 className='text-amber-300'>click on the button to add or Subtract</h2>
      <button onClick={()=>{setNum(Num +10) }}>Add</button>
      <button onClick={()=>{setNum(Num - (Num /2 )) }}  >Subtract</button>
      <button onClick={()=>{setNum(Num * 7) }}  >Multiple </button>
      <button onClick={()=>{setNum(0) }}  >Reset</button>
      <h2>Current Number is {Num}</h2>
     </div>   
    )
}

export default main;