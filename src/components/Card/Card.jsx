import React from "react";
import s from "./card.module.css";
import { NavLink } from "react-router-dom";

export default function Card(props) {
  return (
    <div className={s.Carta}>
      <NavLink to={`/detail/${props.id}`}>
        <button className={s.cardBoton}>
          <span className={s.cardSpan}>{props.name}</span>
        </button>
      </NavLink>

      <img className={s.Img} src={props.image} alt={props.name} />

      <h2>{props.species}</h2>
      <h2>{props.gender}</h2>
      <button className={s.btn} onClick={() => props.onClose(props.id)}>
        <span className={s.Span}>CERRAR</span>
      </button>
    </div>
  );
}
