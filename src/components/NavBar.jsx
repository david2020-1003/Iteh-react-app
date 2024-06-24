import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

function NavBar() {
  return (
    <div className='navBar'>
      <a>My store </a>
      <div className='cart-items'><FaShoppingCart></FaShoppingCart></div>
      <p className='cart-num'>0</p>
      </div>
  )
}

export default NavBar
//function komponenta
//precica za ovo je rfce