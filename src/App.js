
import './App.css';
import pkmnList from "./pokedex.json"
import PokemonList from './PokemonList';
import logo from  './logo.png'
import { useEffect, useState } from 'react';


function App() {
  const [recherche,setRecherche]=useState("")
  const [message,setMessage]=useState("")
  const [listFav, setListFav] = useState(() => {
      const sauvegarde = localStorage.getItem("PkmnFav");
      return sauvegarde ? JSON.parse(sauvegarde) : [];
  });
  

useEffect(() => {
  // Dès que listFav change, on sauvegarde automatiquement
  localStorage.setItem("PkmnFav", JSON.stringify(listFav));
}, [listFav]); // On surveille listFav

  const favPokemon=(id)=>{
    if (listFav.includes(id)){
      const nvFab = listFav.filter(favId=> favId !== id)   
      setListFav(nvFab)
    }else{
      if (listFav.length<6){
        setListFav([...listFav,id]);
      }
      else{
        setMessage("Equipe pleine !")
        setTimeout(() => {
          setMessage("")
        }, 3000);
      }
    }
  }
const PokemonCardEmpty = () => (
  <div className="cardPkmn empty">
    <div className="silhouette">?</div>
    <p>Emplacement vide</p>
  </div>
);

const reinitEquipe=()=>{
  setListFav([])
}
const deleteSearch=()=>{
  setRecherche("")
}

const pkmnNew=pkmnList
  .filter(el=>{
    return el.nom.toLowerCase().includes(recherche.toLowerCase())
  })
  .map(el=>{
    return(
  <PokemonList 
    key={el.id} 
      id={el.id} 
      nom={el.nom} 
      type={el.type} 
      image={el.image}
      isFav={listFav.includes(el.id)}
      onFavClick={favPokemon} 
      nbfav={listFav}/>


    )
  })
 
const afficherFav = () => {
  const equipeVide = [];

  for (let i = 0; i < 6; i++) {
    if (listFav[i]) {
      // S'il y a un favori à cet index, on cherche ses infos
      const pk = pkmnList.find(p => p.id === listFav[i]);
      equipeVide.push(
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
      equipeVide.push(<PokemonCardEmpty key={`empty-${i}`} />);
    }
  }

  return equipeVide;
};
return (
    <div className="App">
      <img className="logo" src={logo}></img>
      <p className={message.includes("Equipe") ? "messageShow" : "messageHide"} >{message}</p>
      {/* <p className='message'>{message}</p> */}
      <div className='search'>
        <input className='searchPkmn' placeholder='Entrer un nom' value={recherche} onChange={(event)=>setRecherche(event.target.value)}></input>
        <button id="deleteSearch" className='deleteSearch' onClick={deleteSearch}>Effacer</button>
      </div>
      {/* <h2>Mon équipe ({listFav.length})</h2> */}
      <div className='equipe'>
        
            <div className="equipe-container">
              {afficherFav()}
             
            </div>
             <button className='reinitEquipe' onClick={reinitEquipe}>Reinitialiser l'équipe</button>
      </div>
      <div className='body'>

           
     {pkmnNew}
     </div>
    </div>
  );
}

export default App;
