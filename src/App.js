import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'; // Ton ancienne logique
import PokemonDetails from './PokemonDetails'; // Ta nouvelle page

function App() {
  const [pkmnList, setPkmnList] = useState([]);

  // On charge l'API ici une seule fois pour tout le monde
  useEffect(() => {
    fetch("https://tyradex.app/api/v1/gen/1")
      .then(res => res.json())
      .then(data => setPkmnList(data));
  }, []);

  return (
    <Router>
      <Routes>
        {/* Page d'accueil : affiche la liste */}
        <Route path="/" element={<Home pkmnList={pkmnList} />} />
        
        {/* Page Détails : l'ID devient dynamique (:id) */}
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
      </Routes>
    </Router>
  );
}

export default App;