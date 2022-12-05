import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import s from "./Detail.module.css";

export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({
    name: "",
    status: "",
    species: "",
    gender: "",
    origin: {},
    location: {},
    image: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }, [id]);

  return character === undefined ? (
    <h1>CARGANDO</h1>
  ) : (
    <div>
      <div className={s.cartaDetalle}>
        <h1>Nombre: {character.name}</h1>
        <div>
          <img className={s.imgDetalle} src={character.image} alt="" />
        </div>
        <h2>Estado: {character.status}</h2>
        <h2>Especie: {character.species}</h2>
        <h2>Genero: {character.gender}</h2>
        <h2>Origen: {character.origin.name}</h2>

        <div className={s.barraBoton}>
          <button
            className={s.botonDetalle}
            onClick={() => {
              navigate("/home");
            }}
          >
            <span className={s.spanDetalle}>VOLVER</span>
          </button>
        </div>
      </div>
    </div>
  );
}
