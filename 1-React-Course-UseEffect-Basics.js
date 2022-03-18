import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {

  const [value, setvalue]= useState(0);

  useEffect(()=>{
    if(value >= 1){
      document.title = `New Message(${value})`
    }
  }, [value])

  return (
    <>
      <h2>useEffect Basics</h2>
      <h1>{value}</h1>
      <button className='btn' onClick={()=> setvalue((prev)=> prev + 1)}>Click me</button>
    </>
  )
};

export default UseEffectBasics;
