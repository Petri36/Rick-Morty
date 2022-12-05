import React from "react";
import Card from "./Card/Card";
import Nav from "./Nav";

export default function Cards(props) {
  //const { characters } = props;

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
        <Nav onSearch={props.onSearch} />
      </div>
      
      <div>
        {props.characters.map((e) => (
          <Card
            name={e.name}
            id={e.id}
            species={e.species}
            gender={e.gender}
            image={e.image}
            key={e.id}
            onClose={props.onClose}
          />
        ))}
      </div>
    </div>
  );
}
