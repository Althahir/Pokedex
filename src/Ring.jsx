import React, { useEffect, useState } from "react"; // R majuscule à React
import { Link } from "react-router-dom";
import "./Detail.css";
import "./App.css";
import logo from "./logo.png"
 import badges from './badges.json'
 import vs from './assets/vs.png'
 import pierre from './assets/Pierre.webp'
 import roche from './assets/Roche.png'
//  import racaillou from 'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/74/regular.png'



const Ring = () => {
    const API = "https://tyradex.app/api/v1/pokemon/";
    const [listPkmn, setListPkmn] = useState([]);
    

    useEffect(() => {
        const list = localStorage.getItem("PkmnFav");
        if (list) {
            const listFavIds = JSON.parse(list); // [1, 2, 3...]

            // 1. On crée une liste de promesses (appels API)
            const fetchPromises = listFavIds.map(id => 
                fetch(`${API}${id}`).then(res => res.json())
            );

            // 2. On attend que tous les fetchs soient finis
            Promise.all(fetchPromises)
                .then(pokemonData => {
                    setListPkmn(pokemonData); // On stocke les OBJETS complets
                })
                .catch(err => console.error("Erreur API:", err));
        }
    }, []);
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

    return (
        <div className="ring">
            <img className="logoDetail" src={logo}></img>
             <Link to="/" className="return">Retour</Link>
            <div className="ringAreaLeft">
               
                
                {/* 3. C'est ici qu'on fait le .map() pour l'affichage */}
                {listPkmn.map((pkmn) => (
                    <div key={pkmn.pokedex_id}  className="cardRing" >
                        <img className="imgRing"
                            src={pkmn.sprites.regular} 
                            alt={pkmn.name.fr} 
                            // style={{ width: "100px" }}
                        />
                        <div className="nomRing" >
                        <p className={`cardRing card${pkmn.types[0].name}`}>{pkmn.name.fr}</p>
                        <img className="iconeRing" src={typeIcons[pkmn.types[0].name]}  />
                        </div>
                        <img className="vsImg" src={vs}></img>
                    </div>
                ))}
            </div>

            <div className="centerRing"></div>
            <div className="centerRing2">
                <div className="centerRingCenter"></div>
            </div>
            
            <div className="ringAreaRight">
                <h1>{badges[0].name}<img className="badgeImg" src={badges[0].image}></img></h1>
                
                <h2>{badges[0].leader}
                    <img className="pierreImg" src={pierre}></img>
                    <p>Aréne : {badges[0].city}</p>
                </h2>
                <div className="pkmnAdversaireArea">
                    <div className="pkmnArea">
                        <img src={badges[0].pk1} className="pkmnAdversaire"></img>
                        <div className="racaillouOnix">Racaillou</div>
                        <img className="typeAdversaire" id="typ1" src={roche} alt="" />
                    </div>
                    <div className="pkmnArea">
                        <img src={badges[0].pk2} className="pkmnAdversaire"></img>
                        <div className="racaillouOnix">Onix</div>
                        <img className="typeAdversaire"  id="typ2" src={roche} alt="" />
                    </div>
                
                </div>
                {/* <img src={racaillou}></img> */}
                {/* Zone pour les autres Pokémon */}
            </div>
        </div>
    );
};

export default Ring;