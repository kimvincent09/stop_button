import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [color, setColor] = useState("#ff0000");
  let [size, setSize] = useState(50)
  function buttonModifier() {
    const rgb = ['a','b','c','d','e','f','0','1','2','3','4','5','6','7','8','9'];
    let color = '#'  //this is what we'll return!
    for(var i = 0; i < 6; i++)   // 6 is total number of characters in hex
    {
        let x = Math.floor((Math.random()*16));  // 16 for hex
        color += rgb[x]; 
    }
    setColor(color)
    setSize(size*2)
  }

  return (
    <div className="App">
      <button  style={{ backgroundColor:  color , width: size, height: size }} onClick={buttonModifier}>STOP</button>
    </div>
  );
}



export default App;
