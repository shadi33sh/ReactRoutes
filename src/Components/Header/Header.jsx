import React from 'react'
import'./Header.css'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <nav className="header">
     <h1 className="logo">Trippy</h1>
     <div className="navItems">
      <ul>
       <Link className='link' to='/'><li><a href="#">Home</a></li></Link> 
       <Link className='link' to='/services'><li><a href="#"><i></i>Services</a></li></Link> 
       <Link className='link' to='/contact'><li><a href="#"><i></i>Contact us</a></li></Link>  
       <Link className='link' to='/about'><li><a href="#">About Us</a></li></Link>
      </ul>
      <button>Sign in</button>
     </div>
    </nav>
  )
}
export default Header