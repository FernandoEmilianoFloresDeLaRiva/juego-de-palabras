import { useEffect, useState } from "react";

export const useLetters = (
  word,
  index,
  value,
  handleErrores,
  setValue,
  handlePuntos,
  puntos,
  inputRef
) => {
  const [letrasIngresadas, setLetrasIngresadas] = useState("");
  useEffect(() => {
    if (value === "") return;
    if (value === word[index]) {
      setLetrasIngresadas((prev) => prev + value);
      handlePuntos((prev) => prev + 1);
    } else {
      handleErrores();
      setValue("");
    }
  }, [value, word, index]);
  useEffect(() => {
    if (puntos === 0) return;
    setValue("");
  }, [puntos]);
  useEffect(() => {
    if (inputRef && inputRef.current && letrasIngresadas === word[index]) {
      inputRef.current.focus();
    }
  }, [letrasIngresadas, word, index, inputRef]);
  return {
    letrasIngresadas,
  };
};
