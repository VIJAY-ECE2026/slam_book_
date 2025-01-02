import { useEffect, useState } from "react";
function Use()
{
    let[Count,setcount]=useState(0);
    useEffect(()=>
    {
        console.log("value updated");
//code cleanup
        return(()=>
        {
            console.log("code cleanup");
        })
    },[Count])


    return(

        <div>
            <h1>count:{Count} </h1>
            <button onClick={()=>setcount(Count+1)}>Increment</button>
            <button onClick={()=>setcount(Count-1)}>Decrement</button>
        </div>
    )
}
export default Use;