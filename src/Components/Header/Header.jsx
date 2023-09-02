import React from 'react'
import'./Header.css'
import { AiFillHome } from "@react-icons/all-files/ai/AiFillHome";
import {HiInformationCircle} from "@react-icons/all-files/Hi/HiInformationCircle"
const Header = () => {
  return (
    <nav className="header">
     <h1 className="logo">Trippy</h1>
     <div className="navItems">
      <ul>
        <li><a href="#"><i><AiFillHome/></i> Home</a></li> 
        <li><a href="#"><i></i>Services</a></li> 
        <li><a href="#"><i></i>Contact us</a></li> 
        <li><a href="#"><i><HiInformationCircle/></i>About Us</a></li> 
      </ul>
      <button>Sign in</button>
     </div>
    </nav>

  )
}
export default Header