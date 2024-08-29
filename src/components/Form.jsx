import React, { useState } from 'react'

const Form = () => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const handleClick=(e)=>{
        e.preventDefault();
        alert(username+"    -> "+password)
        setPassword("")
        setUsername("")
    }
      return (
    <div>
      <form>
        <h1>Login</h1>
        <input type='text' value={username} onChange={(e)=>setUsername(e.target.value)} />
        <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={handleClick}>SUBmit</button>
      </form>
    </div>
  )
}

export default Form
