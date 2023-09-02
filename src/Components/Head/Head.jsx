import React from 'react'
import Contain from '../Container/Contain'
import './Head.css'
import pg from './../../../public/12.jpg'
export default function Head() {
  return (
    <div className="head"> 
   <Contain  
   pg = {pg}  
   title = "Your Jorney Your Story"
   info  = "Choose Your Favourite Destination "
   btn   = "Travile Now"
   />
   </div>
  )
}
