import React from 'react'
import {Route , Routes } from 'react-router-dom'
import { HomePage } from './src/Components/Pages/HomePage'
import AboutPage from './src/Components/Pages/AboutPage'
import ContactPage from './src/Components/Pages/ContactPage'
import ServicesPage from './src/Components/Pages/ServicesPage'
export const App = () => {
  return (
     <Routes>
     <Route path='/' element={<HomePage/>} />
     <Route path='/about' element={<AboutPage/>}/>
     <Route path='/contact' element={<ContactPage/>}/>
     <Route path='/services' element={<ServicesPage/>}/>
     </Routes>     
  )
}
