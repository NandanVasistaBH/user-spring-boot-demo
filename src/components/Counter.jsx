import React, { useState } from 'react'
import ApiDisplay from './ApiDisplay';

const Counter = () => {
    const [counter,setCounter]=useState(1);
  return (
    <div>
        <input type='number' value={counter}/>
        <button onClick={()=>{if(counter<=9)setCounter(counter+1)}}>incremenet</button>
        <button onClick={()=>{if(counter>=-9)setCounter(counter-1)}}>decrement</button>
        {counter>=1 && <ApiDisplay number={counter}/>}
    </div>
  )
}

export default Counter
