import React from "react";
import style from "./Palabra.module.css";

function Palabra({ palabra, orden }) {
  return (
    <div className={style.palabra}>
      <h2>{palabra}</h2>
      <p>{orden}</p>
    </div>
  );
}

export default Palabra;
