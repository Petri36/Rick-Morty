import React, { useState } from "react";
import s from "./searchBar.module.css";

export default function SearchBar(props) {
  const [id, setId] = useState("");

  const infoInput = (e) => {
    setId(e.target.value);
  };

  return (
    <div className={s.Barra}>
      <input
        className={s.Input}
        placeholder="Numero del 1 - 826"
        type="search"
        onChange={infoInput}
      />

      <button className={s.Button} onClick={() => props.onSearch(id)}>
        <span className={s.Span}>AGREGAR</span>
      </button>

      <button
        className={s.Button2}
        onClick={() => props.onSearch(Math.floor(Math.random() * 826))}
      >
        <span className={s.Span}>CUALQUIERA</span>
      </button>
    </div>
  );
}
