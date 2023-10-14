import React from "react";
import style from "./Puntuacion.module.css";

function Puntuacion({ titulo, puntuacion }) {
  return (
    <div className={style.contenidoPuntos}>
      <h2>{titulo}</h2>
      <p>{puntuacion}</p>
    </div>
  );
}

export default Puntuacion;
