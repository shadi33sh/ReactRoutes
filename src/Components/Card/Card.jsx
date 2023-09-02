import React from 'react'
import './Card.css'
export const Card = (props) => {
  return (
    <div className='card'>
       <img  src={props.pic} alt="" />
       <h1>{props.title}</h1>
       <p>{props.info}</p>
    </div>
  )
}
