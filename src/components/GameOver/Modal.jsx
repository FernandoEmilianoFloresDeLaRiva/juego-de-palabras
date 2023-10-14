import React from "react";
import styles from "./Modal.module.css";
import Button from "../Button/Button";
function Modal({ cerrar, puntos }) {
  return (
    <div className={styles.modal}>
      <h1>Game Over!</h1>
      {puntos >= 70 && <h3>{`Haz gando con ${puntos} puntos`}</h3>}
      <Button text={"Vuelve a empezar"} click={cerrar} />
    </div>
  );
}

export default Modal;
