import React from "react";
import Card from "./Card/Card";
import Nav from "./Nav";

export default function Cards(props) {
  return (
    <div>
      <div>
        <img
          className="Title"
          src="https://cdn.shopify.com/s/files/1/0276/0671/2393/collections/RICK_MORTY.png?v=1664371958"
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
