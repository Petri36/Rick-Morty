import React from "react";
import { NavLink } from "react-router-dom";
import s from "./barraSup.module.css";

export default function BarraSup(props) {
  return (
    <div className={s.barra1}>
      <nav className={s.nav1}>
        <div>
          <NavLink to={"/about"}>
            <button className={s.botonSup1}>
              <span className={s.spanSup1}>NOSOTROS</span>
            </button>
          </NavLink>
        </div>

        <NavLink to={"/"}>
          <button className={s.botonSup2}>
            <span className={s.spanSup2}>HOME</span>
          </button>
        </NavLink>
      </nav>
    </div>
  );
}
