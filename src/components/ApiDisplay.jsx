import  { useEffect, useState } from 'react'
import axios from "axios"
const ApiDisplay = ({number}) => {
    const [apidata,setApiData]=useState(null)
    useEffect(()=>{
        const func = async () => {
            const resp = await axios.get("https://jsonplaceholder.typicode.com/todos/"+number)
            console.log(resp.data);
             setApiData(resp.data)
            
        }
        func()
    },[number])
  return (
    <div>
        <h1>hi</h1>
        {apidata && apidata.title && <div>{apidata.title}</div>}
    </div>
  )
}

export default ApiDisplay
