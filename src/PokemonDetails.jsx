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
const officialArtwork = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pkmnFound.pokedex_id}.png`;


      return(
      <div className="containerDetail">
        <Link to="/">Retour</Link>
        <h1 className="nom">{pkmnFound.name?.fr}</h1>
        {/* <div className="containerImage"> */}
          <p className="type">Type : {pkmnFound.types[0].name} {pkmnFound.types[1] ? ` / ${pkmnFound.types[1].name}` : null}</p>
          <table className="tableStat">
          <th>Stats :</th>
          <tr>
            <td>HP</td>
            <td>{pkmnFound.stats.hp}</td>
          </tr>
          <tr>
            <td>Attaque</td>
            <td>{pkmnFound.stats.atk}</td>
          </tr>
          <tr>
            <td>Défense</td>
            <td>{pkmnFound.stats.def}</td>
          </tr>
          <tr>
            <td>Attaque Spéciale</td>
            <td>{pkmnFound.stats.spe_atk}</td>
          </tr>
          <tr>
            <td>Défense Spéciale</td>
            <td>{pkmnFound.stats.spe_def}</td>
          </tr>
          <tr>
            <td>Vitesse</td>
            <td>{pkmnFound.stats.vit}</td>
          </tr>
        </table>

        <table className="tableType">
          <th>Type :</th>
          <th>Coéfficient :</th>
          <tr>
            <td>{pkmnFound.resistances[0].name}</td>
            <td>{pkmnFound.resistances[0].multiplier}</td>
          </tr>
          <tr>
            <td>{pkmnFound.resistances[1].name}</td>
            <td>{pkmnFound.resistances[1].multiplier}</td>
          </tr>
          <tr>
            <td>{pkmnFound.resistances[2].name}</td>
            <td>{pkmnFound.resistances[2].multiplier}</td>
          </tr>
          <tr>
            <td>{pkmnFound.resistances[3].name}</td>
            <td>{pkmnFound.resistances[3].multiplier}</td>
          </tr>
          <tr>
            <td>{pkmnFound.resistances[4].name}</td>
            <td>{pkmnFound.resistances[4].multiplier}</td>
          </tr>
          <tr>
            <td>{pkmnFound.resistances[5].name}</td>
            <td>{pkmnFound.resistances[5].multiplier}</td>
          </tr>
          <tr>
            <td>{pkmnFound.resistances[6].name}</td>
            <td>{pkmnFound.resistances[6].multiplier}</td>
          </tr>
          <tr>
            <td>{pkmnFound.resistances[7].name}</td>
            <td>{pkmnFound.resistances[7].multiplier}</td>
          </tr>
          <tr>
            <td>{pkmnFound.resistances[8].name}</td>
            <td>{pkmnFound.resistances[8].multiplier}</td>
          </tr>
          <tr>
            <td>{pkmnFound.resistances[9].name}</td>
            <td>{pkmnFound.resistances[9].multiplier}</td>
          </tr>
          <tr>
            <td>{pkmnFound.resistances[10].name}</td>
            <td>{pkmnFound.resistances[10].multiplier}</td>
          </tr>
          <tr>
            <td>{pkmnFound.resistances[11].name}</td>
            <td>{pkmnFound.resistances[11].multiplier}</td>
          </tr>
          <tr>
            <td>{pkmnFound.resistances[12].name}</td>
            <td>{pkmnFound.resistances[12].multiplier}</td>
          </tr>
          <tr>
            <td>{pkmnFound.resistances[13].name}</td>
            <td>{pkmnFound.resistances[13].multiplier}</td>
          </tr>
          <tr>
            <td>{pkmnFound.resistances[14].name}</td>
            <td>{pkmnFound.resistances[14].multiplier}</td>
          </tr>
          <tr>
            <td>{pkmnFound.resistances[15].name}</td>
            <td>{pkmnFound.resistances[15].multiplier}</td>
          </tr>
          <tr>
            <td>{pkmnFound.resistances[16].name}</td>
            <td>{pkmnFound.resistances[16].multiplier}</td>
          </tr>
          <tr>
            <td>{pkmnFound.resistances[17].name}</td>
            <td>{pkmnFound.resistances[17].multiplier}</td>
          </tr>
        </table>
        <img src={officialArtwork} alt={pkmnFound.name.fr} className="pokemon-image" 
          /* Si l'image officielle n'existe pas, on peut mettre celle de TyraDex en secours */
          onError={(e) => { e.target.src = pkmnFound.sprites.regular }}/>
        {/* <img 
            src={pkmnFound.sprites?.shiny} 
            alt={pkmnFound.name?.fr} 
            className="pokemon-image"
        /> */}
        {/* </div> */}
          
        
        <div>
      </div>
    </div>
    )} 
    export default PokemonDetails