import React, { useRef, useState } from "react";
import style from "./Letra.module.css";
import { useLetters } from "../../hooks/useLetters";

function InputLetra({
  index,
  word,
  handleErrores,
  handlePuntos,
  puntos,
  setIndexInput,
  indexInput,
}) {
  const [value, setValue] = useState("");
  const refInput = useRef(null);
  const { letrasIngresadas } = useLetters(
    word,
    index,
    value,
    handleErrores,
    setValue,
    handlePuntos,
    puntos,
    setIndexInput,
    refInput,
    indexInput
  );
  console.log();
  const handleChange = ({ target }) => {
    setValue(target.value);
  };

  return (
    <input
      className={style.input}
      onChange={handleChange}
      value={value}
      ref={index === indexInput ? refInput : null}
      disabled={index !== indexInput}
    />
  );
}

export default InputLetra;
