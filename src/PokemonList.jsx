import React from "react"
import { useState } from "react"


const PokemonList =({id,nom,type,image, isFav, onFavClick, nbfav,showPkball})=>{
 
 
 
    return(
        
        <div className="cardPkmn">
            <p className="idPkmn">Id : {id}</p>
            <p className="nomPkmn">{nom}</p>
            <div className="imageContainer">
                <img src={image} className="imagePkmn" alt="" />
                {isFav && showPkball
                    ? <div className="pokeball"></div>
                    : <div></div>}
            </div>
            <p className={`type ${type}`}>{type}</p>
            {showPkball
                ? <button className="btnPkmn" onClick={() => onFavClick(id)}>
                {isFav 
                    ? (
                    <div className="isFav"><p>Dans l'équipe !</p></div>
                        ) 
                    : nbfav.length >= 6 
                        ? (
                        <p className="equipeMax">Équipe au max</p>
                            ) 
                        : (
                         <p className="ajoutEquipe">Mettre dans l'équipe ?</p>
                         )}
                    </button>
                :   null
                }
            
            {/* <button className="btnPkmn" onClick={() => onFavClick(id)}>
                {isFav 
                    ? <div className="isFav"><p>Dans l'équipe !</p><div className="pokeball"></div></div>
                    : <div className="isNotFav">{nbfav[5]==null
                                                    ?<p className="ajoutEquipe">Mettre dans l'équipe ?</p>
                                                    :<p className="equipeMax">Equipe au max</p>}</div>}
            </button> */}
          
        </div>
       
    )
}

export default PokemonList
