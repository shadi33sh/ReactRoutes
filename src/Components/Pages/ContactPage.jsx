import React from 'react'
import pg from './../../../public/night.jpg'
import Header from '../Header/Header'
import Head from '../Head/Head'
import { PopularDestination } from '../PopularDestination/PopularDestination'
import { RecentTrips } from '../RecentTrips/RecentTrips'
import Footer from '../Footer/Footer'
const btn = "travel now"
const ContactPage = () => {
  return (
    <div>
    <Header/>
     <Head
      pg = {pg}  
      title = "This is Contact Page"
      info  = "Choose Your Favourite Destination"
      btn   = {btn}
     />
     <PopularDestination/>
     <RecentTrips/>
     <Footer/>
    </div>
  )
}
export default ContactPage