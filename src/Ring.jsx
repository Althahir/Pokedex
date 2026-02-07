import React, { useEffect, useState } from "react"; // R majuscule à React
import { Link } from "react-router-dom";
import "./Detail.css";
import "./App.css";
import logo from "./logo.png"

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
                    </div>
                ))}
            </div>

            <div className="centerRing"></div>
            <div className="centerRing2">
                <div className="centerRingCenter"></div>
            </div>
            
            <div className="ringAreaRight">
                <h1>En attente du joueur 2</h1>
                {/* Zone pour les autres Pokémon */}
            </div>
        </div>
    );
};

export default Ring;