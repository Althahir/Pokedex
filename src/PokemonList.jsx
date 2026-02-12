import React from "react"
import { useState } from "react"
const typeIcons = {
  Feu: require('./assets/Feu.png'),
  Eau: require('./assets/Eau.png'),
  Plante: require('./assets/Plante.png'),
  Electrik: require('./assets/Electrik.png'),
  Psy: require('./assets/Psy.png'),
  Combat: require('./assets/Combat.png'),
  Vol: require('./assets/Vol.png'),
  Fée: require('./assets/Fée.png'),
  Normal: require('./assets/Normal.png'),
  Dragon: require('./assets/Dragon.png'),
  Insecte: require('./assets/Insecte.png'),
  Poison: require('./assets/Poison.png'),
  Roche: require('./assets/Roche.png'),
  Sol: require('./assets/Sol.png'),
  Spectre: require('./assets/Spectre.png'),

};

const PokemonList =({id,nom,type,image,icone,statsAtk,statsDef, isFav, onFavClick, nbfav,showPkball, supprFav})=>{
 
 
 
    return(
        
        <div className={`cardPkmn card${type}`}>
            <p className="idPkmn">Id : {id}</p>
            <p className="nomPkmn">{nom}</p>
            <img className="icone" src={typeIcons[icone]} alt={icone} />
            <div className="imageContainer">
                <img src={image} className="imagePkmn" alt="" />
                <p className="atk">Atk. :<span>{statsAtk}</span></p>
                <p className="def">Déf. :<span>{statsDef}</span></p>
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
                <button onClick={()=>supprFav(id)} className="supprFav">X</button>
            
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
