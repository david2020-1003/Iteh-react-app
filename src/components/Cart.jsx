import React from 'react'
import OneProduct from './OneProduct'

const Cart = ({products}) => {
  return (
    <div className='cart-container'>
      <h3>This is your cart.</h3>
      {products.map((prod) =>(
        <OneProduct product = {prod} key={prod.id} 
        // dodatak za skidanje dugmica u kad smo u korpi 
        inCart = {0} // ovo oznacava da nismo u korpi
        />
         ))}
    </div>
  )
}

export default Cart
//ovaj export default je obavezan
