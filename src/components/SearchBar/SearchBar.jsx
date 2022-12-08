import React, { useState } from "react";
import s from "./searchBar.module.css";

export default function SearchBar(props) {
  const [id, setId] = useState("");

  const infoInput = (e) => {
    setId(e.target.value);
  };

  return (
    <div className={s.barra}>
      <input
        className={s.input}
        placeholder="Número del 1 al 826"
        type="search"
        onChange={infoInput}
      />

      <button className={s.addbutton} onClick={() => props.onSearch(id)}>
        <span className={s.Span}>ADD</span>
      </button>

      <button
        className={s.randombutton}
        onClick={() => props.onSearch(Math.floor(Math.random() * 826))}
      >
        <span className={s.Span}>RANDOM</span>
      </button>
    </div>
  );
}
