import './App.css';
import React, { useState } from 'react';
import {produce, pantryItems} from './Data';
import Itemlist from './Components/Itemlist';

function App() {
const [cart, setCart] = useState([]);

const addItem = (e) =>{
  setCart((prev)=>[  e.target.value, ...prev])
} 

const removeItem = (targetIndex)=>{
 setCart((prev)=> prev.filter((item, index) => index !== targetIndex))
}

//callback test
// const hello = (ovalue) =>{
//   alert(ovalue);
// }


  return(
    <div className="app">
      <h1>Groccery Cart</h1>
      {/* <button onClick={()=>hello('great')}></button> */}
      <ul>
      {cart.map((cartItem, index)=>(
        <li key={index} onClick={()=>removeItem(index)} value={cartItem}>{cartItem}</li>
      ))}
      </ul>  
    
    <h2>Produce</h2>
    <Itemlist items={produce} onItemClick={addItem}/>
    <h2>Pantry Items</h2>
    <Itemlist items={pantryItems} onItemClick={addItem}/>
  </div>
  )
}

export default App;
