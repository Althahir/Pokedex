
import './App3.css';
import './Detail.css';
import pkmnList from "./pokedex.json"
import PokemonList from './PokemonList';
import logo from  './logo.png'
import { useEffect, useState } from 'react';
import PokemonDetails from './PokemonDetails';
import PKB from './pokeball.png'


function Home() {
  const [recherche,setRecherche]=useState("")
  const [message,setMessage]=useState("")
  const [listFav, setListFav] = useState(() => {
      const sauvegarde = localStorage.getItem("PkmnFav");
      return sauvegarde ? JSON.parse(sauvegarde) : [];
  });
  

useEffect(() => {
  // Dès que listFav change, on sauvegarde automatiquement
  localStorage.setItem("PkmnFav", JSON.stringify(listFav));
}, [listFav]); 

  const favPokemon=(id)=>{
    if (listFav.includes(id)){
      const nvFab = listFav.filter(favId=> favId !== id)   
      setListFav(nvFab)
    }else{
      if (listFav.length<6){
        setListFav([...listFav,id]);
      }
      else{
        setMessage("Equipe compléte !")
        setTimeout(() => {
          setMessage("")
        }, 3000);
      }
    }
  }
const PokemonCardEmpty = () => (
  <div className="cardPkmn empty">
    {/* <div className="silhouette">?</div> */}
    <img src={PKB} className='equipe-vide' alt="" />
    <h2 className='emptyText'>?</h2>
    {/* <p>Emplacement vide</p> */}
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
    console.log("Données du Pokémon dans le lien :", el);
   const currentId = el.pokedex_id || el.id;

return (
  
  <PokemonList 
  currentId={currentId}
    key={el.id} 
      id={el.id} 
      nom={el.nom} 
      image={el.image}
      icone={el.type}
      isFav={listFav.includes(el.id)}
      onFavClick={favPokemon} 
       type={el.type} 
      nbfav={listFav}
      showPkball={true}
      statsAtk={el.stats.atk}
      statsDef={el.stats.def}/>


    )
  })

const afficherFav = () => {
  const equipeVide = [];

  for (let i = 0; i < 6; i++) {
    if (listFav[i]) {
      const pk = pkmnList.find(p => p.id === listFav[i]);
      equipeVide.push(
        <PokemonList 
          // key={pk.id} 
          // id={pk.id} 
          // nom={pk.nom} 
          // statsAtk={pk.stats.atk}
          // statsDef={pk.stats.def}
          // icone={pk.type}
          // type={pk.type} 
          image={pk.image}
          // isFav={true} 
          // onFavClick={favPokemon} 
          // showPkball={false}
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
      {/* <p className= "messageShow" >{message}</p> */}
      {/* <p className={message.includes("Equipe") ? "messageShow" : "messageHide"} >{message}</p> */}
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
      <div className={message.includes("Equipe") ? "messageAreaShow" : "messageAreaHidden"}>
      {/* <div className="messageAreaShow" > */}
        <div className='messageShow'>
          {/* <div className='pokeball_message' id="pk1"></div>
          <div className='pokeball_message' id="pk2"></div>
          <div className='pokeball_message' id="pk3"></div> */}
          <img src={PKB} className='pokeball_msg' id="pkM1" alt="" />
          <img src={PKB} className='pokeball_msg' id="pkM2" alt="" />
          <img src={PKB} className='pokeball_msg' id="pkM3" alt="" />
          <img src={PKB} className='pokeball_msg' id="pkM4" alt="" />
          <img src={PKB} className='pokeball_msg' id="pkM5" alt="" />
          <img src={PKB} className='pokeball_msg' id="pkM6" alt="" />
          <h2 className='messageText'>{message}</h2>
          {/* <div className='pokeball_message' id="pk4"></div>
          <div className='pokeball_message' id="pk5"></div>
          <div className='pokeball_message' id="pk6"></div> */}
          
        </div>
      </div>  
      <div className='body'>

           
     {pkmnNew}
     </div>
    </div>
  );
}

export default Home