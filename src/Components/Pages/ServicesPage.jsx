import React from 'react'
import Head from '..//Head/Head'
import Footer from '../Footer/Footer' 
import Header from '../Header/Header'
import pg from './../../../public/1.jpg'
import  {PopularDestination}  from './../../Components/PopularDestination/PopularDestination.jsx'
import { RecentTrips } from './../../Components/RecentTrips/RecentTrips.jsx'
const ServicesPage = () => {
  return (
    <div>
     <Header/>
     <Head
      pg = {pg}  
      title = "Services"
      info  = "Choose Your Favourite Destination "
      btn   = "Travile Now"
     />
     <PopularDestination/>
     <RecentTrips/>
     <Footer/>
    </div>
  )
}

export default ServicesPage