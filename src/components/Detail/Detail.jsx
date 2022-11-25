import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import React  from "react";


export default function Detail() {
    const { id } = useParams ();
    const [ character, setCharacter] = useState({name: "",
    status: "",
    species: "",
    gender: "",
    origin: {},
    location: {},
    image: "",})
    const navigate = useNavigate();
 
 useEffect(() => {
     fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => response.json())
        .then((char) => {
           if (char.name) {
              setCharacter(char);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        })
  }, [id,]);
    
    
    return (
            (character === undefined )?
            <h1>CARGANDO</h1> :
            
        <div>
            <h1>NAME:{character.name}</h1>
            <h2>STATUS:{character.status}</h2>
            <h2>SPECIE:{character.species}</h2>
            <h2>GENDER:{character.gender}</h2>
            <h2>ORIGIN:{character.origin.name}</h2>
            <div>
            <img src={character.image} alt="" />
            </div>
            <div>
                <button onClick={()=> {navigate("/")} }>VOLVER</button>
            </div>
        </div>
    )
}
