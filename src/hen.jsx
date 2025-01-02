import React, { useContext } from "react";
import { nameContext } from "./app1";

const Hen = () => {
    const value = useContext(nameContext); // Access context value
    return (
        <div>
            <h2>Hen: {value}</h2>
        </div>
    );
};

export default Hen;
