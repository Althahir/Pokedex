 import React from "react"
 import { useEffect, useState } from "react"
 import { useParams, Link } from 'react-router-dom'; // Importe usePara

 const PokemonDetails=()=>{
  const [pkmnFound,setPkmnFound]=useState(null)
  const { id } = useParams(); // On met des ACCOLADES autour de id
//   const {DetailId} = 6

  useEffect(()=>{
    console.log("J'essaie de chercher le Pokémon numéro :", id); // Regarde ce chiffre !

//   fetch(`https://tyradex.app/api/v1/pokemon/6`)
  fetch(`https://tyradex.app/api/v1/pokemon/${id}`)
    .then(res=>res.json())
    .then(data=>setPkmnFound(data))
  },[id])

  if (!pkmnFound){
    return (<div>chargement en cours</div>)
  }

      return(
      <div className="containerDetail">
        <Link to="/">Retour</Link>
        <h1>Nom : {pkmnFound.name?.fr}</h1>
        <img 
            src={pkmnFound.sprites?.regular} 
            alt={pkmnFound.name?.fr} 
            className="pokemon-image"
        />
        <img 
            src={pkmnFound.sprites?.shiny} 
            alt={pkmnFound.name?.fr} 
            className="pokemon-image"
        />
        <p>Type : {pkmnFound.types[0].name} / {pkmnFound.types[1].name}</p>
        <div>
      </div>
    </div>
    )} 
    export default PokemonDetails