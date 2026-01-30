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

  
  const pkmnNew=pkmnList.map(el=>{
  return (
  <div>
  <PokemonList 
    key={el.id} 
      id={el.id} 
      nom={el.nom} 
      type={el.type} 
      image={el.image}
      isFav={listFav.includes(el.id)}
      onFavClick={favPokemon} />
      
    </div>
    )
})
  const afficherFav=()=>{
    const listAffichee = listFav.map(el=>{
      const pk= pkmnList.find(p => p.id===el)
      if (pk){
        return(
          <PokemonList 
          key={pk.id} 
          id={pk.id} 
          nom={pk.nom} 
          type={pk.type} 
          image={pk.image}
          isFav={true} // Ils sont forcément favoris ici
          onFavClick={favPokemon} 
        />
        )
      }
      return null;
    })
    return listAffichee
  }
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
        {listFav.length > 0 
          ? (
            <div className="equipe-container">
              {afficherFav()}
            </div>
            )
          : (
            <p>Aucun Pokémon dans votre équipe pour le moment.</p>
            )}
      </div>
      <div className='body'>

           
     {pkmnNew}
     </div>
    </div>
  );
}

export default App;
