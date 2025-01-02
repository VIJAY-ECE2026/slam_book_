import { useState } from "react";
import { useRef } from "react";
function UseRef()
{

    let[count,setCount]=useState("");
    let countRef=useRef(0); 

    let Increment=()=>
    {
        setCount(count+1);
        countRef.current++;
    }
    console.log("state",count);
    console.log("Ref",countRef);

  return(
    <div>
        <h1>count : {count}</h1>
        <button onClick={Increment}>++++</button>
        <input type="text"onChange={(e)=>{setCount(e.target.value)}} />
    </div>
        )
}

export default UseRef;