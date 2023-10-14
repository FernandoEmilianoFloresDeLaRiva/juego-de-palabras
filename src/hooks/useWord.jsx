import { useEffect, useState } from "react";
import { getWords } from "../utils/getWords";

export const useWord = () => {
  const [puntos, setPuntos] = useState(0);
  const [puntosLetra, setPuntosLetra] = useState(0);
  const [word, setWord] = useState({ orderWord: [], reverseWord: [] });
  useEffect(() => {
    async function getWord() {
      const objetoWord = await getWords();
      await setWord(objetoWord);
    }
    getWord();
  }, [puntos]);
  useEffect(() => {
    if (word.orderWord.length === 0) return;
    const handlePuntos = () => {
      if (puntosLetra === word.orderWord.length) {
        setPuntos((prev) => prev + 10);
        setPuntosLetra(0);
      }
    };
    handlePuntos();
  }, [puntosLetra]);
  return { word, puntosLetra, puntos, setPuntosLetra, setPuntos};
};
