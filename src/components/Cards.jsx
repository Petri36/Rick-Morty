import React from "react";
import Card from "./Card/Card";
import Nav from "./Nav";
import { useState } from "react";

export default function Cards(props) {
  //const { characters } = props;

  const [character, setCharacter] = useState([]);

  const noRepeat = (data) => {
    for (let char of character) {
      if (char.name === data.name) {
        return true;
      }
    }
    return false;
  };

  const onClose = (id) => {
    setCharacter(character.filter((char) => char.id !== id));
  };

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (noRepeat(data)) {
          return window.alert("El personaje ya existe");
        } else {
          if (data.name) {
            setCharacter((oldChars) => [...oldChars, data]);
          } else {
            window.alert("No hay personajes con ese ID");
          }
        }
      });
  }

  return (
    <div>
      <div>
        <img
          className="Title"
          src="https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty.png"
          alt=""
        />
      </div>

      <div>
        <Nav onSearch={onSearch} />
      </div>

      {character.map((e) => (
        <Card
          name={e.name}
          id={e.id}
          species={e.species}
          gender={e.gender}
          image={e.image}
          key={e.id}
          onClose={onClose}
        />
      ))}
    </div>
  );
}
