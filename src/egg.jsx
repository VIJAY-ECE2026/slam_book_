import React from "react";
import Hen from "./hen";
import { useContext } from "react";
import { nameContext } from "./app1";
//import React, { useContext } from 'react';

const Egg=({value})=>
{
    let dog = useContext(nameContext)
    return(
        <div>
        <h1>egg : {dog} </h1>
        <Hen/>
        </div>
    )
}
export default Egg;