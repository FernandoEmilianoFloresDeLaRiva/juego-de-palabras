import { useEffect, useState } from "react";

export const useLetters = (
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
) => {
  const [letrasIngresadas, setLetrasIngresadas] = useState("");
  useEffect(() => {
    if(refInput.current !== null) refInput.current.focus();
  }, [indexInput]);
  useEffect(() => {
    if (value === "") return;
    if (value === word[index]) {
      setLetrasIngresadas((prev) => prev + value);
      handlePuntos((prev) => prev + 1);
      setIndexInput((prev) => prev + 1);
    } else {
      handleErrores();
      setValue("");
    }
  }, [value, word, index]);
  useEffect(() => {
    if (puntos === 0) return;
    setValue("");
  }, [puntos]);
  return {
    letrasIngresadas,
  };
};
