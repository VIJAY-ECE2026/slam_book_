import React, { useMemo, useState } from "react";

function App2() {
    const [dark, setDark] = useState(false);
    const [number, setNumber] = useState(0);

    // Memoized calculation for doubling the number
    const doublenum = useMemo(() => {
        return slowfunction(number);
    }, [number]);

    // Memoized theme style
    const themestyle = useMemo(() => {
        return {
            backgroundColor: dark ? "black" : "white",
            color: dark ? "white" : "black",
        };
    }, [dark]);

    return (
        <div style={themestyle}>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(Number(e.target.value))}
            />
            <button onClick={() => setDark((prevDark) => !prevDark)}>
                Toggle Theme
            </button>
            <p>Double of the number (calculated slowly): {doublenum}</p>
        </div>
    );
}

export default App2;

// Simulates a slow function with delay
function slowfunction(num) {
    // Introduce a delay via a computational loop
    for (let i = 0; i < 1_000_000_000; i++) {
        // Simulate heavy computation
    }
    return num * 2;
}
