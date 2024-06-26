import './App.css';
import Cart from './components/Cart';
import NavBar from './components/NavBar';
import Products from './components/Products'; 
import { useState } from 'react';
//mozemo da koristimo i alijase
import { BrowserRouter,Routes,Route } from 'react-router-dom';
//imali smo import Link, ali na ne treba ovde nego u NavBaru

function App() {
  //const prom = <h3>Cao svima!</h3>
  //let cartNum = 0;
  //const[state,setstate] = useState(initialState);
  const[cartNum, setCartNum] = useState(0);  //pomocu ove fje mi azuiramo promene broja proizvoda u korpi
  const[cartProducts, setCartProducts] = useState([]); // ovo nam je za prikaz iskljucivo proizvoda koji su dodati, bez 
                                                         // onih proizvoda ciji je amount = 0;
  const [products,setProducts] =  useState([
    {
      id: 1,
      title: "Chocolate",
      description:
        "Chocolate is a food made from cacao beans. It is used in many desserts like pudding, cakes and candy",
      amount: 0,
    },
    {
      id: 2,
      title: "Lollypop",
      description:
        "Lollipops are available in a number of colors and flavors, particularly fruit flavors.",
      amount: 0,
    },
    {
      id: 3,
      title: "Ice Cream",
      description:
        "Ice cream is a sweetened frozen food typically eaten as a snack or dessert.",
      amount: 0,
    },
  ]);

  function refreshCart(){
    let newProducts = 
         products.filter((prod)=> /*ovde*/ prod.amount > 0 );
                /*ovde sad ide uslov na osnovu koje se filtrira */
      //ova funkcija ce proci kroz sve elemente niza, proveri uslov i vrati 
      // i onda u newProducts imamo ceo niz proizovda
      setCartProducts(newProducts);
  }

  function addProduct(title, id) {
               // prosledjujemo id iz oneproducta
    console.log("Dodat je proizvod: " + title);
    //cartNum++; 1. nacin ali nam ne azurira korpu, zbog toga smo napravili useState fju
    setCartNum(cartNum + 1); // omogucava azuriranje
    //console.log(cartNum); // ova linija je brza od linije 39, zbog toga nam u consoli ispsuje vrednost za 1 manje
    products.forEach((prod)=>{
      //proveravamo da li je id isti kao kliknut proizvod
        if(prod.id === id){
          prod.amount++;
        }
    })
    refreshCart();
  };

  

  function removeProduct(title,id){
    console.log("Izbrisan je proizvod: " + title);
    setCartNum(cartNum - 1);
    products.forEach((prod)=>{
      if(prod.id === id){
        prod.amount--;
      }
    })
  }
  
  return (
    <BrowserRouter className="App">
      <NavBar cartNum={cartNum}></NavBar>
      <Routes>
        <Route 
         path = "/"
         element={ <Products products={products} onAdd={addProduct} onRemove={removeProduct}/>}/>
         <Route 
         path = "/cart/*"
         element={ <Cart products={cartProducts}/>}/>
      </Routes>
        {/* ovde pozivamo klasu products koju prosledjujemo sve ovo (products i addProduct) */}
      
    </BrowserRouter> 
    // ovde smo zamenili div sa BrowserRouter!
  );
}

export default App;
//OVO NAM JE GLAVNA KOMPONENTA U NJOJ POZIVAMO SVE
