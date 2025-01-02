import { createContext } from "react";
import Hen from "./hen";
import Stomach from "./stomach";

export let nameContext = createContext();

function App1() {   
    return (
        <nameContext.Provider value="water">

            <Stomach />
        </nameContext.Provider>
        
    );
}

export default App1;