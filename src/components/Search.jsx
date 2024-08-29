import React, { useState } from 'react'

const Search = () => {
    const [search,setSearch] = useState("");
    const [click,setClick] =useState(false);
    const handleClick = ()=>{
        setClick(true);
    }
  return (
    <div>
        <input onChange={(e)=>{handleClick(false);setSearch(e.target.value)}} value={search}/>
        <button onClick={handleClick}>Search</button>
        {click && <span>{search}</span>}
    </div>
  )
}


export default Search
