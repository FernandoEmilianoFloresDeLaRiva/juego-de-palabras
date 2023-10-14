import React, { useState } from "react";
import style from "./Letra.module.css";
import { useLetters } from "../../hooks/useLetters";

function InputLetra({ index, word, handleErrores, handlePuntos, puntos, inputRef }) {
  const [value, setValue] = useState("");
  const { letrasIngresadas } = useLetters(
    word,
    index,
    value,
    handleErrores,
    setValue,
    handlePuntos,
    puntos
  );
  const handleChange = ({ target }) => {
    setValue(target.value);
  };

  return (
    <input className={style.input} onChange={handleChange} value={value} ref={inputRef}/>
  );
}

export default InputLetra;
