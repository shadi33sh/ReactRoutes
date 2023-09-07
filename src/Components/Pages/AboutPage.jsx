import React from 'react'
import Header from '../Header/Header'
import Head from '../Head/Head'
import { PopularDestination } from '../PopularDestination/PopularDestination'
import { RecentTrips } from '../RecentTrips/RecentTrips'
import Footer from '../Footer/Footer'
import pg from './../../../public/2.jpg'
const AboutPage = () => {
  return (
    <div>
     <Header/>
     <Head
     pg = {pg}
     title = "this is about page"
     info  = "welcome in our wepsite"
     btn = "Travel now"
     />
     <PopularDestination/>
     <RecentTrips/>
     <Footer/>
    </div>
  )
}

export default AboutPage