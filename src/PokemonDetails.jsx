 import React from "react"
 import { useEffect, useState } from "react"
 import { useParams, Link } from 'react-router-dom'; // Importe usePara

 const PokemonDetails=()=>{
  const [pkmnFound,setPkmnFound]=useState(null)
  const { id } = useParams(); // On met des ACCOLADES autour de id
//   const {DetailId} = 6
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

  useEffect(()=>{

//   fetch(`https://tyradex.app/api/v1/pokemon/6`)
  fetch(`https://tyradex.app/api/v1/pokemon/${id}`)
    .then(res=>res.json())
    .then(data=>setPkmnFound(data))
  },[id])
  if (!pkmnFound){
    return (<div>chargement en cours</div>)
  }
const officialArtwork = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pkmnFound.pokedex_id}.png`;

// const DisplayStat=()=>{
//   return(pkmnFound.stats.map((el,index)=>{
//     return(
//         <div className="ligType" key={index}>
//             <p>HP</p>
//             <p>{el.hp}</p>
//           </div>
//     )
//   }))
// }
const DisplayType=()=>{
  return (pkmnFound.resistances.map((el,index)=>{
    return(
    <div className="ligType" key={index}>
            <p className="titreType">{el.name}</p>
            <p className={`data_type data${el.multiplier < 1 ? 0 : el.multiplier}`}>
              {el.multiplier}
            </p>
          </div>)}
    )
)}

      return(
      <div className="containerDetail ">
        <Link to="/" className="return">Retour</Link>
        <h1 className={`nom nom${pkmnFound.types[0].name}`}>{pkmnFound.name?.fr}</h1>
        {/* <div className="containerImage"> */}
          <p className={`typeDetail type${pkmnFound.types[0].name}`}>Type : {pkmnFound.types[0].name} {pkmnFound.types[1] ? ` / ${pkmnFound.types[1].name}` : null}</p>
         
          <table className="tableStat">
          <th>Stats :</th>
          <tr>
             <td>HP</td>
            <td className={`${pkmnFound.stats.hp<20 
              ? "stat20" 
              : pkmnFound.stats.hp<40
                ?"stat40"
                : pkmnFound.stats.hp<60
                  ?"stat60"  
                  :pkmnFound.stats.hp<80
                    ?"stat80"
                    : pkmnFound.stats.hp<100
                      ?"stat100"
                      :"statFull"}`
              }>{pkmnFound.stats.hp}</td>
          </tr>
         
          <tr>
            <td>Attaque</td>
            <td className={`${pkmnFound.stats.atk<20 
              ? "stat20" 
              : pkmnFound.stats.atk<40
                ?"stat40"
                : pkmnFound.stats.atk<60
                  ?"stat60"  
                  :pkmnFound.stats.atk<80
                    ?"stat80"
                    : pkmnFound.stats.atk<100
                      ?"stat100"
                      :"statFull"}`
              }>{pkmnFound.stats.atk}</td>
          </tr>
          <tr>
            <td>Défense</td>
            <td className={`${pkmnFound.stats.def<20 
              ? "stat20" 
              : pkmnFound.stats.def<40
                ?"stat40"
                : pkmnFound.stats.def<60
                  ?"stat60"  
                  :pkmnFound.stats.def<80
                    ?"stat80"
                    : pkmnFound.stats.def<100
                      ?"stat100"
                      :"statFull"}`
              }>{pkmnFound.stats.def}</td>
          </tr>
          <tr>
            <td>Attaque Spéciale</td>
            <td className={`${pkmnFound.stats.spe_atk<20 
              ? "stat20" 
              : pkmnFound.stats.spe_atk<40
                ?"stat40"
                : pkmnFound.stats.spe_atk<60
                  ?"stat60"  
                  :pkmnFound.stats.spe_atk<80
                    ?"stat80"
                    : pkmnFound.stats.spe_atk<100
                      ?"stat100"
                      :"statFull"}`
              }>{pkmnFound.stats.spe_atk}</td>
          </tr>
          <tr>
            <td>Défense Spéciale</td>
            <td className={`${pkmnFound.stats.spe_def<20 
              ? "stat20" 
              : pkmnFound.stats.spe_def<40
                ?"stat40"
                : pkmnFound.stats.spe_def<60
                  ?"stat60"  
                  :pkmnFound.stats.spe_def<80
                    ?"stat80"
                    : pkmnFound.stats.spe_def<100
                      ?"stat100"
                      :"statFull"}`
              }>{pkmnFound.stats.spe_def}</td>
          </tr>
          <tr>
            <td>Vitesse</td>
            <td className={`${pkmnFound.stats.vit<20 
              ? "stat20" 
              : pkmnFound.stats.vit<40
                ?"stat40"
                : pkmnFound.stats.vit<60
                  ?"stat60"  
                  :pkmnFound.stats.vit<80
                    ?"stat80"
                    : pkmnFound.stats.vit<100
                      ?"stat100"
                      :"statFull"}`
              }>{pkmnFound.stats.vit}</td>
          </tr>
        </table>
        {/* {DisplayStat()} */}
        <h5 className="titleType">Forces / Faiblesses :</h5>
        <div className="tableType">
          
          {DisplayType()}
        </div>
        
        <img src={officialArtwork} alt={pkmnFound.name.fr} className="pokemon-image" 
          /* Si l'image officielle n'existe pas, on peut mettre celle de TyraDex en secours */
          onError={(e) => { e.target.src = pkmnFound.sprites.regular }}/>
        {/* <img 
            src={pkmnFound.sprites?.shiny} 
            alt={pkmnFound.name?.fr} 
            className="pokemon-image"
        /> */}
        {/* </div> */}
        <div className="imgShiny">
          <h2 className="titreShiny">Shiny</h2>
          <img src={pkmnFound.sprites.shiny} className="shiny"></img>
        </div>
        
        <div>
          {pkmnFound.sprites.gmax ?
           <div className="imgShiny2">
            <h2 className="titreShiny">Giga Max</h2>
            <img src={pkmnFound.sprites.gmax.regular} className="shiny"></img>
            <img src={pkmnFound.sprites.gmax.shiny} className="shiny"></img>
          </div>
        :null}
      </div>
    </div>
    )} 
    export default PokemonDetails