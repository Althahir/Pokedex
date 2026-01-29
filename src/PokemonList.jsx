import React from "react"
import { useState } from "react"


const PokemonList =({id,nom,type,image})=>{
 
 
 
    return(
        
        <div className="cardPkmn">
           {/* <p className="idPkmn">Id : {id}</p> */}
           <p className="nomPkmn">{nom}</p>
           <p className={`type ${type}`}>{type}</p>
           <img src={image} className="imagePkmn" alt="" />
           {/* <button className="buttonPkmn"  onClick={SelectFav}>{isFav==false ? `Mettre en favoris` : `Enlever des favoris`}</button> */}
          
        </div>
       
    )
}

export default PokemonList