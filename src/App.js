// PAS REUSSI A FAIRE :

// Intermédiaires
// ● système de favoris ⭐
// ● compteur de favoris
// ● tri par nom ou id

// j'arrive pas a comprendre la logique qui me permet de mettre le bouton favoris dans l'enfant et le compteur dans le parent
import './App.css';
import pkmnList from "./pokedex.json"
import PokemonList from './PokemonList';
import logo from  './logo.png'
import { useState } from 'react';




function App() {

  
  const pkmnNew=pkmnList.map(el=>{
  return (
  <div>
  <PokemonList 
    key={el.id} 
      // id={el.id} 
      nom={el.nom} 
      type={el.type} 
      image={el.image} />
      
      </div>
    )
})
  
return (
    <div className="App">
      <img className="logo" src={logo}></img>
      {/* <div className='search'>
        <input className='searchPkmn'></input>
        <button className='searchButton'>Rechercher</button>
      </div> */}
      <div className='body'>
     {pkmnNew}
     </div>
    </div>
  );
}

export default App;
