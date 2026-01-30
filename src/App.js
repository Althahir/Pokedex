
import './App.css';
import pkmnList from "./pokedex.json"
import PokemonList from './PokemonList';
import logo from  './logo.png'
import { useEffect, useState } from 'react';
import logoRec from './logoRecherche.png'


function App() {
  const [recherche,setRecherche]=useState("")
  const [listFav,setListFav]=useState([])

    // listFav.length>0 ? console.log(listFav) : console.log("")
    useEffect(() => {
    if (listFav.length > 0) {
      // console.log("--- Mes Favoris ---");
      listFav.forEach(id => {
      // On cherche l'objet pokemon complet dans la liste d'origine
      const pokemonTrouve = pkmnList.find(p => p.id === id);
      
      if (pokemonTrouve) {
        // console.log(`ID ${id} : ${pokemonTrouve.nom}`);
        localStorage.setItem=("PkmnFav",JSON.stringify)
      }
    });
  }
}, [listFav]);

  const favPokemon=(id)=>{
    if (listFav.includes(id)){
      const nvFab = listFav.filter(favId=> favId !== id)
      
      setListFav(nvFab)
    }else{
      setListFav([...listFav,id]);
      

    }
  }
const PokemonCardEmpty = () => (
  <div className="cardPkmn empty">
    <div className="silhouette">?</div>
    <p>Emplacement vide</p>
  </div>
);
  
  const pkmnNew=pkmnList.map(el=>{
  return (
  
  <PokemonList 
    key={el.id} 
      id={el.id} 
      nom={el.nom} 
      type={el.type} 
      image={el.image}
      isFav={listFav.includes(el.id)}
      onFavClick={favPokemon} />
      
    
    )
})
const afficherFav = () => {
  const MAX_TEAM = 6;
  const teamVisuals = [];

  for (let i = 0; i < MAX_TEAM; i++) {
    if (listFav[i]) {
      // S'il y a un favori à cet index, on cherche ses infos
      const pk = pkmnList.find(p => p.id === listFav[i]);
      teamVisuals.push(
        <PokemonList 
          key={pk.id} 
          id={pk.id} 
          nom={pk.nom} 
          type={pk.type} 
          image={pk.image}
          isFav={true} 
          onFavClick={favPokemon} 
        />
      );
    } else {
      // Sinon, on pousse une silhouette vide
      teamVisuals.push(<PokemonCardEmpty key={`empty-${i}`} />);
    }
  }

  return teamVisuals;
};
return (
    <div className="App">
      <img className="logo" src={logo}></img>
      <div className='search'>
        <input className='searchPkmn' placeholder='Entrer un nom'></input>
        <button id="searchButton" className='searchButton'>Recherche</button>
        <p id='message'></p>
      </div>
      <h2>Mon équipe ({listFav.length})</h2>
      <div className='equipe'>
        
            <div className="equipe-container">
              {afficherFav()}
            </div>
      </div>
      <div className='body'>

           
     {pkmnNew}
     </div>
    </div>
  );
}

export default App;
