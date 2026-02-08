import React, { useEffect, useState } from "react";
import infoParcours from "./badges.json"
import './parcours.css'

const Parcours=()=>{
//  const [tabParcours,setTabParcours]=useState([])

    
//   {
//     "id": 1,
//     "name": "Badge Roche",
//     "leader": "Pierre",
//     "image-leader":"https://static.wikia.nocookie.net/pokemonworld/images/7/7e/Pierre.png/revision/latest?cb=20130805154048&path-prefix=fr",
//     "city": "Argenta",
//     "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/badges/1.png",
//     "pk1":"https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/74/regular.png",
//     "pk2":"https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/95/regular.png"
//   },

    return(
         <div className="parcoursArea">
        {infoParcours.map((el)=>{
            return(
                <div className="advCard">
                    <h1 key={el.id}>{el.name}</h1>
                    <img src={el.image} alt="" ></img>
                    <p>{el.city}</p>
                    <h2>{el.leader}</h2>
                    <img src={el["image-leader"]}></img>
                </div>
            )
            
        })
    } 
           





     
   
           </div>
       
        
    )
}

export default Parcours
