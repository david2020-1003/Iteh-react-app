import React from 'react'
import OneProduct from './OneProduct'

const Products = ({products, onAdd,onRemove}) => {
    //const name="Naziv proizvoda";
    //const desc = "Ovo je malo duzi opis proizvoda";

    // ovaj product je objekat, i zato idu viticaste zagrade

    // const product = {
    //     title: "Naziv proizvoda",
    //     description: "Ovo je malo duzi opis proizvoda",
    // };
   
    
  return (
    <div className='all-products'>
        {/* moramo u viticaste u jsxu, SVE vidimo i po komentaru */}
        {products.map((prod) =>(<OneProduct product = {prod} key={prod.id} onAdd = {onAdd} onRemove={onRemove} 
         inCart = {1} // ovo je ako je u korpi(dodatak)
        /> ))}

      {/* <OneProduct product = {products[0]}/>  
      <OneProduct product = {products[1]} />  
      <OneProduct product = {products[2]} />   */}

      {/* umesto ovoga cemo raditi mapiranje */}
    </div>
  )
}

//arrow fja
// (a) =>{
//     let b = 10;
//     return a + b;
// }
// (a) => a + 10;



export default Products
//rafce, ovo je arrow funkcija
//ovaj < one product / > je samo sa zatvarujim tagom jer ne zelimo unutar njega nista da
// u jSXU ako prosledjujemo promenljivu uvek mora {}