import React from "react";
import style from "./Contenedor.module.css";
import Puntuacion from "../Puntuacion/Puntuacion";

function Contenedor({errores, puntos = 0, record}) {
  return (
    <div className={style.puntuacionSeccion}>
      <Puntuacion titulo={"Errores:"} puntuacion={errores}/>
      <Puntuacion titulo={"Puntos:"} puntuacion={puntos}/>
      <Puntuacion titulo={"Record:"} puntuacion={record}/>
    </div>
  );
}

export default Contenedor;
