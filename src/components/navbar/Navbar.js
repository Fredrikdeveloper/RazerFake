import React from 'react'
import '../navbar/Navbar.css'
import {NavLink} from 'react-router-dom'
import {useCart} from 'react-use-cart'
import {FaBars,FaTimes} from 'react-icons/fa'
import { useRef } from 'react'

const Navbar = () => {

   const navRef = useRef()
   const showNavbar = () => {
      navRef.current.classList.toggle("responsive_nav")
   }

   const {items} = useCart()
  return (
  <div className='header'>
     <NavLink to="/">
     <img src="https://razer-shop.netlify.app/static/media/razer-ths-logo.0d25071aa9e861bf55d7f240475a2ff1.svg" />
     </NavLink>
      
     <nav ref={navRef}>
     <div className='btn0-option'>
      <button className='nav-btn nav-close-btn'>
         <FaTimes onClick={showNavbar} />
        </button> 
        <img src="https://razer-shop.netlify.app/static/media/razer-ths-logo.0d25071aa9e861bf55d7f240475a2ff1.svg" />

     </div>
       <input className='nav-input' placeholder='Search razer.com' />
       <NavLink to="/pc">
              PC
           </NavLink>
<NavLink to="/mobile">
              Mobile
          </NavLink>
          <NavLink to="/">
             Home
           </NavLink>
           <NavLink to="/services">
              Services
           </NavLink>
           <NavLink to="/store">
             Store
            </NavLink>
            <NavLink className="nav-problem" to="/signup">
              SignUp
           </NavLink>
        
     </nav>
     <NavLink className="basket-visble" to="/basket">
     
           <i class="fa-solid fa-cart-shopping"></i><sup className='pricesss'>{items.length}</sup>
           </NavLink>
     <button className='nav-btn '>
         <FaBars onClick={showNavbar} />
     </button>
  </div>

  )
}

export default Navbar