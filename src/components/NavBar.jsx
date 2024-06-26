import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import {Link} from "react-router-dom";

function NavBar({cartNum}) {
  //const cartNum = 0;
  return (
    <div className='navBar'>
      {/* <a href='/'>My store </a> */}
      <Link to = "/">My store</Link>
      {/* <a href= '/cart' className='cart-items'> */}
      <Link to = "/cart" className='cart-items'>
      {/* zamenili smo <a> sa Link, i umesto href ide to */}
          <FaShoppingCart/>
          <p className='cart-num'>{cartNum}</p>
          {/* dodali smo da klikom na mystore/korpu da nas prosledjuje samo na osnovu hrefa */}
      </Link>
      </div>
  )
}

export default NavBar
//function komponenta
//precica za ovo je rfce