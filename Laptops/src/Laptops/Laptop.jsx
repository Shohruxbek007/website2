 import React from 'react'
 import './Laptop.css'
 import Server from './Products'
import Element from '../Element/Element'

 const Laptop = () => {
   return (
     <div className='laptop'>
      {Server.map(t => {
        return <Element key={t.id} model={t.model} price={t.price} img={t.img}/>
      }
      )
      }
     </div>
     
   )
 }
 
 export default Laptop
 