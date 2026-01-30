import React from "react"
import { useState } from "react"


const PokemonList =({id,nom,type,image, isFav, onFavClick})=>{
 
 
 
    return(
        
        <div className="cardPkmn">
            <p className="idPkmn">Id : {id}</p>
            <p className="nomPkmn">{nom}</p>
            <img src={image} className="imagePkmn" alt="" />
            <p className={`type ${type}`}>{type}</p>
            {/* <button className="buttonPkmn" onClick={}>Ajouter au favoris</button> */}
            <button className="btnPkmn" onClick={() => onFavClick(id)}>
                {isFav 
                    ? <p className="isFav">Dans les favs ! <br></br><span>⭐</span></p>
                    : <p className="isNotFav">Ajouter aux favs ? <br></br><span>☆</span></p>}
            </button>
          
        </div>
       
    )
}

export default PokemonList