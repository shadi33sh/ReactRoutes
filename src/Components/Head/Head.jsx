import React from 'react'
import Contain from '../Container/Contain'
import './Head.css'
import pg from './../../../public/12.jpg'
export default function Head(props) {
  return (
    <div className="head"> 
   <Contain  
 pg =    {props.pg}  
 title = {props.title}
 info  = {props.info}
 btn   = {props.btn}
   />
   </div>
  )
}
