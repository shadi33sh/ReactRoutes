import React from 'react'
import './RecentTrips.css'
import { Card } from '../Card/Card'
import FirstPic  from './../../../public/5.jpg'
import thirdtPic from './../../../public/8.jpg'
import secPic from './../../../public/6.jpg'
export const RecentTrips = () => {
  return (
    <div className='recent'>
         <div className="text">
        <h1>Recent Trips</h1>
        <p>You Can Discover Unique Destination Using Google Maps</p>
         </div>
        <div className="cardItem">
        <Card
        title = "Trip In Indosesia"
        info  = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, aspernatur est quo voluptatem culpa, in officiis odio aliquid aperiam dolores tempore fugit enim, iure obcaecati vitae optio. Quod, facere corrupti! " 
        pic  =  {FirstPic}
        />
        <Card
        title = "Trip In France"
        info  = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, aspernatur est quo voluptatem culpa, in officiis odio aliquid aperiam dolores tempore fugit enim, iure obcaecati vitae optio. Quod, facere corrupti! " 
        pic  =  {thirdtPic}
        />
        <Card
        title = "Trip In Malaysia"
        info  = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, aspernatur est quo voluptatem culpa, in officiis odio aliquid aperiam dolores tempore fugit enim, iure obcaecati vitae optio. Quod, facere corrupti! " 
        pic  =  {secPic}
        />
        </div>
    </div>
  )
}
