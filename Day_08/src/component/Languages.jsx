import React from 'react'

const Languages = () => {
    let lang=[
      {id:1,name:"Java"},
      {id:2,name:"Javascript"},
      {id:3,name:"Kotlin"},
      {id:4,name:"Python"},
      {id:5,name:"C"},
      {id:6,name:"C++"},
      {id:7,name:"Swift"},
      {id:8,name:"Ruby"},
    ];  
    var check=false;
  return (
    <div>
        <h1 className={check?"bg-success":"bg-warning text-white"}>{check?"Best Programming Languages:":"Top 5 Programming Languages"}:</h1>
     <ul>
            {lang.map((item)=>(
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
        
    </div>
  )
}

export default Languages;