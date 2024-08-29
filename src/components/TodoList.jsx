import React, { useState } from 'react'

const TodoList = () => {
    const [alltodos,setAlltodos] = useState([])
    const [newtodo,setnewTodo] = useState("")
    const addTodo=()=>{
        setAlltodos([...alltodos,newtodo])
        setnewTodo("")
    }
  return (
    <div>
        <h1>todos</h1>
        <input type="text" value={newtodo} onChange={(e)=>setnewTodo(e.target.value)}/>
        <button onClick={addTodo}>ADD</button>
        {alltodos.length!==0 && alltodos.map(t=>{
            return (<div>{t}</div>);
        })}
    </div>
  )
}


export default TodoList
