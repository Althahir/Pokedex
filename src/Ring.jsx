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

    return (
        <div className="ring">
            <img className="logoDetail" src={logo}></img>
             <Link to="/" className="return">Retour</Link>
            <div className="ringAreaLeft">
               
                
                {/* 3. C'est ici qu'on fait le .map() pour l'affichage */}
                {listPkmn.map((pkmn) => (
                    <div key={pkmn.pokedex_id}  className="card" >
                        <img className="imgRing"
                            src={pkmn.sprites.regular} 
                            alt={pkmn.name.fr} 
                            // style={{ width: "100px" }}
                        />
                        <p className="nomRing">{pkmn.name.fr}</p>
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