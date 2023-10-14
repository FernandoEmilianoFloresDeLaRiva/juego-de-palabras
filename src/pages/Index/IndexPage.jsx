import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import Puntuacion from "../../components/Puntuacion/Puntuacion";
import InputLetra from "../../components/InputLetra/InputLetra";
import Button from "../../components/Button/Button";
import Palabra from "../../components/Palabra/Palabra";
import { useWord } from "../../hooks/useWord";

function IndexPage() {
  const [errores, setErrores] = useState(0);
  const { word, puntos, setPuntosLetra } = useWord();
  const handleErrores = () => {
    setErrores(errores + 1);
  };
  return (
    <div className={styles.body}>
      <section className={styles.primeraSeccion}>
        <Palabra palabra={word.reverseWord} orden={"desordenada"} />
        <Palabra palabra={word.orderWord} orden={"ordenada"} />
      </section>
      <section className={styles.segundaSeccion}>
        <Puntuacion errores={errores} puntos={puntos} />
        <div className={styles.contenedorInputs}>
          {word.reverseWord.map((letra, index) => {
            return (
              <InputLetra
                key={index}
                index={index}
                word={word.orderWord}
                handleErrores={handleErrores}
                handlePuntos={setPuntosLetra}
                puntos={puntos}
              />
            );
          })}
        </div>
        <div className={styles.contenedorButton}>
          <Button text={"Reset"} />
        </div>
      </section>
    </div>
  );
}

export default IndexPage;
