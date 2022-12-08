import React from "react";
import { NavLink } from "react-router-dom";
import s from "./barraSup.module.css";

export default function BarraSup(props) {
  const { logout } = props;
  return (
    <div className={s.barra1}>
      <nav className={s.nav1}>
        <div>
          <NavLink to={"/about"}>
            <button className={s.botonSup1}>
              <span className={s.spanSup1}>ABOUT</span>
            </button>
          </NavLink>
        </div>

        <NavLink to={"/favorites"}>
          <button className={s.botonSup1}>
            <span className={s.spanSup1}>FAVORITES💖</span>
          </button>
        </NavLink>

        <NavLink to={"/home"}>
          <button className={s.botonSup2}>
            <span className={s.spanSup2}>HOME</span>
          </button>

          <button onClick={() => logout()} className={s.logout}>
            ⬅️Logout
          </button>
        </NavLink>
      </nav>
    </div>
  );
}
