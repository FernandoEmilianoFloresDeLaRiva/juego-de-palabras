import React, { useState } from "react";
import styles from "./index.module.css";
import InputLetra from "../../components/InputLetra/InputLetra";
import Button from "../../components/Button/Button";
import Palabra from "../../components/Palabra/Palabra";
import { useWord } from "../../hooks/useWord";
import Modal from "../../components/GameOver/Modal";
import Contenedor from "../../components/PuntuacionContenedor/Contenedor";

function IndexPage() {
  const [gameOver, setGameOver] = useState(false);
  const [errores, setErrores] = useState(0);
  const [indexInput, setIndexInput] = useState(0)
  const { word, puntos, setPuntosLetra, setPuntos, record } = useWord(gameOver, setIndexInput);
  const handleErrores = () => {
    setErrores(errores + 1);
    if (errores === 3) {
      setGameOver(true);
    }
  };
  const handleReset = (e) => {
    e.preventDefault();
    setErrores(0);
    setPuntosLetra(0);
    setPuntos(0);
  };
  const cerrarModal = (e) => {
    e.preventDefault();
    setGameOver(false);
    setErrores(0);
    setPuntos(0);
  };
  return (
    <div className={styles.body}>
      {gameOver && <Modal cerrar={cerrarModal} puntos={puntos} />}
      <section className={styles.primeraSeccion}>
        <Palabra palabra={word.reverseWord} orden={"desordenada"} />
        <Palabra palabra={word.orderWord} orden={"ordenada"} />
      </section>
      <section className={styles.segundaSeccion}>
        <Contenedor errores={errores} puntos={puntos} record={record} />
        <div className={styles.contenedorInputs}>
          {word.reverseWord.map((_, index) => {
            return (
              <InputLetra
                key={index}
                index={index}
                word={word.orderWord}
                handleErrores={handleErrores}
                handlePuntos={setPuntosLetra}
                puntos={puntos}
                setIndexInput={setIndexInput}
                indexInput = {indexInput}
              />
            );
          })}
        </div>
        <div className={styles.contenedorButton}>
          <Button text={"Reset"} click={handleReset} />
        </div>
      </section>
    </div>
  );
}

export default IndexPage;
