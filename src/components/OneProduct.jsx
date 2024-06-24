import React from 'react'
import { FaPlus } from "react-icons/fa";
import { BsDashLg } from "react-icons/bs";

//stavljam {} zato sto zelim tacno tu ikonicu

//za CSS koristimo camelCase notaciju
//interni CSS kao promenljiva
//inline CSS obavezno {{duple zagrade}} , jer jedne zagrade svakako stavljamo za promenljivu

function OneProduct() {
    const stil = {margin: 1 + 'em', borderStyle: "dotted"};
  return (
    <div className='card' style={stil}> 
        <img className='card-img-top' src="https:/picsum.photos/200" alt="Neka slika" />
        <div className="card-body">
            <h3 className="card-title">Product name</h3>
            <p className="card-text">This is description of the procuts</p>
        </div>
        <button className="btn"><FaPlus></FaPlus></button>
        <button className="btn"><BsDashLg></BsDashLg></button>
    </div>
  )
}

export default OneProduct