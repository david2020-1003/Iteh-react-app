import React from 'react'
import { FaPlus } from "react-icons/fa";
import { BsDashLg } from "react-icons/bs";

//stavljam {} zato sto zelim tacno tu ikonicu

//za CSS koristimo camelCase notaciju
//interni CSS kao promenljiva
//inline CSS obavezno {{duple zagrade}} , jer jedne zagrade svakako stavljamo za promenljivu

//function OneProduct(props) {

//DESTRUKTURIRANJE OBJEKTA
    function OneProduct({product,onAdd,onRemove,inCart}) { // ovde smo primenili to deskturiranje samo smo podelili na producte, mora u {}
        const stil = {margin: 1 + 'em', borderStyle: "dotted"};
    //console.log(props); 

    // function onAdd(title){
    //     console.log("Dodat proizvod: " + title);
    // }

  return (
    <div className={inCart === 1 ? "card" : "card-item"} style={stil}> 
        <img className={inCart === 1 ? "card-img-top" : "card-img-left"} 
        src="https:/picsum.photos/200"
        alt="Neka slika" />
        <div className="card-body">
            <h3 className="card-title">{product.title}</h3>
            <p className="card-text">{product.description}</p> 
        </div>
        {/* ovde cemo dodati kao neki if uslov da ako se nalazimo u korpi onda nemoj da prikazujes dugmice */}
        {inCart === 1 ? (<> <button className="btn" onClick={()=>onAdd(product.title, product.id)}> 
                                                      {/* ovde smo dodali product.id za povecanje(smanjivanje) amounta */}
         {/* dodali smo () i => i onda onAdd moze da prima parametar */}
            <FaPlus></FaPlus>
        </button>
        
        <button className="btn" onClick={()=>onRemove(product.title, product.id)}> 
            <BsDashLg></BsDashLg>
            </button> </> ) : (
              <><h4>Amount: {product.amount}</h4></>
              )}
            
            {/* baca gresku jer ne mozemo imati vise elemenata nego samo jedan button  i onda stavljamo sve 
            u jedan div, ali ne moramo u div mozemo i samo u prazne zagradice, da nam se ne bi prikazivao div*/}
    </div>
  )
}

export default OneProduct