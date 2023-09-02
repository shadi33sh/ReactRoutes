import React from 'react'
import './Contain.css'
const Contain = ({title , info , btn , pg}) => { 
  return (
    <div className="container">
      <img src={pg} alt="" />
       <div className="info">
       <h1> {title}</h1> 
       <p>{info} </p>
       <button>{btn}</button>
       </div>
    </div>
  )

}
export default Contain