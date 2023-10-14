import React from "react";
import style from "./Puntuacion.module.css";

function Puntuacion({errores, puntos = 0}) {
  console.log(puntos)
  return (
    <div className={style.puntuacionSeccion}>
      <div className={style.contenidoPuntos}>
        <h2>Errores:</h2>
        <p>{errores}</p>
      </div>
      <div className={style.contenidoPuntos}>
        <h2>Puntos:</h2>
        <p>{puntos}</p>
      </div>
    </div>
  );
}

export default Puntuacion;
