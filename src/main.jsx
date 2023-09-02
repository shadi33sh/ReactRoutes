import React from 'react'
import ReactDOM from 'react-dom/client'
import Footer from './Components/Footer/Footer.jsx'
import Header from './Components/Header/Header.jsx'
import Contain from './Components/Container/Contain.jsx'
import Head from './Components/Head/Head.jsx'
import { PopularDestination } from './Components/PopularDestination/PopularDestination.jsx'
import { RecentTrips } from './Components/RecentTrips/RecentTrips.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Head />
    <PopularDestination/>
    <RecentTrips/>
    <Footer />
  </React.StrictMode>,
)
