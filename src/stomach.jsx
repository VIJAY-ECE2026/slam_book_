import React, { useState, useContext } from 'react';
import { nameContext } from './app1';
import Pepper from './pepper';

const Stomach = () => {
  const names = useContext(nameContext);
  const [style, setStyle] = useState({
    color: 'white',
    backgroundColor: 'black'
  });

  const toggleStyle = () => {
    setStyle((e) => ({
      color: e.color ==='white' ? 'black' : 'white',
      backgroundColor: e.backgroundColor ==='black' ? 'white' : 'black'
    }));
  };

  return (
    <div>
      <h1 style={style}>Stomach : {names}</h1>
      <button onClick={toggleStyle}>Button</button>
      <Pepper/>
    </div>
  );
};
 
export default Stomach;