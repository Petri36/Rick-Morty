import React from "react";
import s from "./About.module.css";
import { useNavigate } from "react-router-dom";

export default function About(props) {
  const navigate = useNavigate();
  return (
    <div className={s.aboutDiv}>
      <img
        src="https://avatars.githubusercontent.com/u/109110678?v=4"
        alt="Foto de Petri"
        width="25%"
        height="auto"
      />
      <h1 className={s.aboutH1}>Nosotros</h1>
      <p className={s.aboutP}>
        Mi nombre es{" "}
        <a
          className={s.aboutA}
          href="https://www.instagram.com/agustinpetrini/"
          rel="yo"
        >
          Agustín Petrini
        </a>{" "}
        , autor de la página en la cual nos encontramos. Este es mi primer
        proyecto, el cual realicé para el BootCamp Soyhenry, en el módulo de
        FrontEnd (M2).
      </p>
      <p className={s.aboutP}>
        Quisiera mencionar y agradecer a mi equipo de trabajo, con el cual hemos
        hecho grandes cosas y avanzamos juntos, superando muchas cosas y
        desafíos. Ellos son:{" "}
        <a
          className={s.aboutA}
          href="https://www.instagram.com/saanti_arguello/"
          rel="Santiago"
        >
          Santiago Arguello
        </a>{" "}
        y{" "}
        <a
          className={s.aboutA}
          href="https://www.instagram.com/jonathanmolero/"
          rel="Jhona"
        >
          Jonathan Molero
        </a>{" "}
      </p>
      <div className={s.aboutBarra}>
        <button
          className={s.aboutButton}
          onClick={() => {
            navigate("/home");
          }}
        >
          <span className={s.aboutSpan}>VOLVER</span>
        </button>
      </div>
    </div>
  );
}
