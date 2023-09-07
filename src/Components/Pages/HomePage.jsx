import React from 'react'
import Head from '..//Head/Head'
import Footer from '../Footer/Footer' 
import Header from '../Header/Header'
import pg from './../../../public/12.jpg'
import  {PopularDestination}  from './../../Components/PopularDestination/PopularDestination.jsx'
import { RecentTrips } from './../../Components/RecentTrips/RecentTrips.jsx'
export const HomePage = () => {
  return (
    <div>
     <Header/>
     <Head
      pg = {pg}  
      title = "Your Jorney Your Story"
      info  = "Choose Your Favourite Destination "
      btn   = "Travile Now"
     />
     <PopularDestination/>
     <RecentTrips/>
     <Footer/>
    </div>
  )
}
