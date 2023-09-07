import React from 'react'
import './Contain.css'
const Contain = (props) => { 
  return (
    <div className="container">
      <img src={props.pg} alt="" />
       <div className="info">
       <h1> {props.title}</h1> 
       <p>{props.info} </p>
       <button>{props.btn}</button>
       </div>
    </div>
  )
}
export default Contain