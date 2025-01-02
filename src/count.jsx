import { useState } from "react";

function Cat() {
  
    
    const [count, setCount] = useState(0); // Counter
    const [name, setName] = useState(""); // Name state
    const [num, setNum] = useState(10);   // Addition result state

    return (
        
        
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>++</button>
            <button onClick={() => setCount(count - 1)}>--</button>
            
            <h1>Name: {name}</h1>
            <label htmlFor="name">Name: </label>
            <input
                type="text"
                onChange={(t) => setName(t.target.value)} // Update name state
            />

            <h1>Add: {num}</h1>
            <label htmlFor="add">Add: </label>
            <input type="number" onChange={(t) =>setNum(parseFloat(t.target.value) + 10) // Parse and add 10
                }
            />
        </div>
        
    );
}

export default Cat;
