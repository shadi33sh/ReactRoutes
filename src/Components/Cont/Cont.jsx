import React, { useState } from 'react'
import './Cont.css'

export const Cont = (props) => {  
  return (
    <div className={'cont ' + props.class}>
      <div className="desc">
        <h1>{props.title}</h1>
        <p>{props.info}</p>
      </div>
      <div className="image">
         <img src={props.firstPic} alt="" />
         <img src={props.secpic} alt="" />
      </div>
    </div>
  )
}
 