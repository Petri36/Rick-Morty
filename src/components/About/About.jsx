import React from "react";
import s from './About.module.css'

export default function About() {
  return (
    <div className={s.carta}>
        <div>
          <h1>Creado por Agustín Petrini</h1>
        </div>
        <hr />
          <img
            src="https://scontent.faep9-2.fna.fbcdn.net/v/t39.30808-6/239961377_1376847409364900_5436563740580591542_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zGni4KL1QTkAX8dQJFz&tn=-yhT4gZ5KbpNvOlf&_nc_ht=scontent.faep9-2.fna&oh=00_AfCcOxdD9V9NFwcqu3pPRD5xbq8i3eJQMScxiRiAmWB0dg&oe=6381795B"
            alt="Foto de Petri"
            width="100%"
            height= "auto"
          />
        <hr />
          <span>Developer</span>
          <hr />
          <span>Hombre</span>
        <div>
          <p>
            <b>Profesor de Educación Física</b> y <b>Auxiliar de logística</b> con base en la
            ciudad de Arroyo Seco (Santa Fe).
          </p>

          <p>
            Estos conocimientos y experiencia, mas el constante aprendizaje y
            ajuste de <b>habilidades blandas</b>, y una gran capacidad para la{" "}
            <b>organización</b>, <b>comunicación</b> y <b>aprendizaje rápido</b>{" "}
            a través de la investigación, las que me han permitido alcanzar el
            rango de <b>director creativo</b> en proyectos con{" "}
            <b>equipos de trabajo multidisciplinarios</b>.
          </p>
        </div>
    </div>
  );
}
