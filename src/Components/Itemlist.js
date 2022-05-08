import React from 'react'
import { useState } from 'react'

function Itemlist(props) {


  return (
    <>
    {props.items.map((item, index)=>(
        <button key={index} onClick={props.onItemClick} value={item}>{item}</button>
    ))}
    </>
  )
}

export default Itemlist