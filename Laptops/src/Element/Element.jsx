import React from 'react'
import "./Element.css"
const Element = (props) => {
  return (
    <div className='element'>
      <h2>{props.model}</h2>
      <img src={props.img} alt="" />
      <div className='tag'>
      <p> Starts from ${props.price}</p>
      <button>see options</button>
    </div>

    </div>
  )
    
}

export default Element
