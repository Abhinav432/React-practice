import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(7200);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const hour =Math.floor (seconds / 3600);
  const minute = Math.floor((seconds % 3600) / 60);
   const sec = seconds % 60;

  return (
    <>
  <h2 className='font-extrabold text-xl text-blue-400  p-7 relative left-1/3 to'>
      Timer:{hour.toString().padStart(2,"0")}:
      {minute.toString().padStart(2,"0")}:
      {sec.toString().padStart(2,"0")} </h2>
  </>
  );
}

export default Timer;