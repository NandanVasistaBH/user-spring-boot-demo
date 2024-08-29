import React, { useEffect, useState } from 'react'

const FunTimer = () => {
const [second,setSecond] = useState(0);
const [second1,setSecond1] = useState(0);
useEffect(()=>{
    const interval = setTimeout(() => {
        setSecond((second)=>second+1)
    }, 1000); 
    return ()=>clearTimeout(interval) // if u don't remove there will be multiple intervals updating second
},[second])

useEffect(()=>{
    const interval = setInterval(() => {
        setSecond1((second1)=>second1+1)
    }, 1000); 
    return ()=>clearInterval(interval) // if u don't remove there will be multiple intervals updating second
},[])
  return (
    <div>
      <span>using setTimeout</span>{second}<span> / using setInterval</span>
      {second1}
    </div>
  )
}

export default FunTimer
