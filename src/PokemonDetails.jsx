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

        <div className="tableType">
        <div className="ligType">
            <p className="titreType">{pkmnFound.resistances[0].name}</p>
            <p className={`data_type data${pkmnFound.resistances[0].multiplier < 1 ? 0 : pkmnFound.resistances[0].multiplier}`}>
              {pkmnFound.resistances[0].multiplier}
            </p>
          </div>
        <div className="ligType">
            <p className="titreType">{pkmnFound.resistances[1].name}</p>
            <p className={`data_type data${pkmnFound.resistances[1].multiplier < 1 ? 0 : pkmnFound.resistances[1].multiplier}`}>
              {pkmnFound.resistances[1].multiplier}
            </p>
          </div>
        <div className="ligType">
            <p className="titreType">{pkmnFound.resistances[2].name}</p>
            <p className={`data_type data${pkmnFound.resistances[2].multiplier < 1 ? 0 : pkmnFound.resistances[2].multiplier}`}>
              {pkmnFound.resistances[2].multiplier}
            </p>
          </div>
        <div className="ligType">
            <p className="titreType">{pkmnFound.resistances[3].name}</p>
            <p className={`data_type data${pkmnFound.resistances[3].multiplier < 1 ? 0 : pkmnFound.resistances[3].multiplier}`}>
              {pkmnFound.resistances[3].multiplier}
            </p>
          </div>
        <div className="ligType">
            <p className="titreType">{pkmnFound.resistances[4].name}</p>
            <p className={`data_type data${pkmnFound.resistances[4].multiplier < 1 ? 0 : pkmnFound.resistances[4].multiplier}`}>
              {pkmnFound.resistances[4].multiplier}
            </p>
          </div>
        <div className="ligType">
            <p className="titreType">{pkmnFound.resistances[5].name}</p>
            <p className={`data_type data${pkmnFound.resistances[5].multiplier < 1 ? 0 : pkmnFound.resistances[5].multiplier}`}>
              {pkmnFound.resistances[5].multiplier}
            </p>
          </div>
        <div className="ligType">
            <p className="titreType">{pkmnFound.resistances[6].name}</p>
            <p className={`data_type data${pkmnFound.resistances[6].multiplier < 1 ? 0 : pkmnFound.resistances[6].multiplier}`}>
              {pkmnFound.resistances[6].multiplier}
            </p>
          </div>
        <div className="ligType">
            <p className="titreType">{pkmnFound.resistances[7].name}</p>
            <p className={`data_type data${pkmnFound.resistances[7].multiplier < 1 ? 0 : pkmnFound.resistances[7].multiplier}`}>
              {pkmnFound.resistances[7].multiplier}
            </p>
          </div>
        <div className="ligType">
            <p className="titreType">{pkmnFound.resistances[8].name}</p>
            <p className={`data_type data${pkmnFound.resistances[8].multiplier < 1 ? 0 : pkmnFound.resistances[8].multiplier}`}>
              {pkmnFound.resistances[8].multiplier}
            </p>
          </div>
          
          </div>
          <div className="tableType2">
        <div className="ligType">
            <p className="titreType">{pkmnFound.resistances[9].name}</p>
            <p className={`data_type data${pkmnFound.resistances[9].multiplier < 1 ? 0 : pkmnFound.resistances[9].multiplier}`}>
              {pkmnFound.resistances[9].multiplier}
            </p>
          </div>
        <div className="ligType">
            <p className="titreType">{pkmnFound.resistances[10].name}</p>
            <p className={`data_type data${pkmnFound.resistances[10].multiplier < 1 ? 0 : pkmnFound.resistances[10].multiplier}`}>
              {pkmnFound.resistances[10].multiplier}
            </p>
          </div>
        <div className="ligType">
            <p className="titreType">{pkmnFound.resistances[11].name}</p>
            <p className={`data_type data${pkmnFound.resistances[11].multiplier < 1 ? 0 : pkmnFound.resistances[11].multiplier}`}>
              {pkmnFound.resistances[11].multiplier}
            </p>
          </div>
        <div className="ligType">
            <p className="titreType">{pkmnFound.resistances[12].name}</p>
            <p className={`data_type data${pkmnFound.resistances[12].multiplier < 1 ? 0 : pkmnFound.resistances[12].multiplier}`}>
              {pkmnFound.resistances[12].multiplier}
            </p>
          </div>
        <div className="ligType">
            <p className="titreType">{pkmnFound.resistances[13].name}</p>
            <p className={`data_type data${pkmnFound.resistances[13].multiplier < 1 ? 0 : pkmnFound.resistances[13].multiplier}`}>
              {pkmnFound.resistances[13].multiplier}
            </p>
          </div>
        <div className="ligType">
            <p className="titreType">{pkmnFound.resistances[14].name}</p>
            <p className={`data_type data${pkmnFound.resistances[14].multiplier < 1 ? 0 : pkmnFound.resistances[14].multiplier}`}>
              {pkmnFound.resistances[14].multiplier}
            </p>
          </div>
        <div className="ligType">
            <p className="titreType">{pkmnFound.resistances[15].name}</p>
            <p className={`data_type data${pkmnFound.resistances[15].multiplier < 1 ? 0 : pkmnFound.resistances[15].multiplier}`}>
              {pkmnFound.resistances[15].multiplier}
            </p>
          </div>
        <div className="ligType">
            <p className="titreType">{pkmnFound.resistances[16].name}</p>
            <p className={`data_type data${pkmnFound.resistances[16].multiplier < 1 ? 0 : pkmnFound.resistances[16].multiplier}`}>
              {pkmnFound.resistances[16].multiplier}
            </p>
          </div>
        <div className="ligType">
            <p className="titreType">{pkmnFound.resistances[17].name}</p>
            <p className={`data_type data${pkmnFound.resistances[17].multiplier < 1 ? 0 : pkmnFound.resistances[17].multiplier}`}>
              {pkmnFound.resistances[17].multiplier}
            </p>
          </div>
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