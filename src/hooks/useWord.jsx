import { useEffect, useState } from "react";
import { getWords } from "../utils/getWords";

export const useWord = (gameOver) => {
  const [record, setRecord] = useState(localStorage.getItem("record") || 0);
  const [puntos, setPuntos] = useState(0);
  const [puntosLetra, setPuntosLetra] = useState(0);
  const [word, setWord] = useState({ orderWord: [], reverseWord: [] });
  useEffect(() => {
    if (puntos >= 70) {
      if (puntos > record) {
        localStorage.setItem("record", puntos);
        setRecord(puntos);
      }
    }
  }, [puntos]);
  useEffect(() => {
    async function getWord() {
      const objetoWord = await getWords();
      await setWord(objetoWord);
    }
    getWord();
  }, [puntos, gameOver]);
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
  return { word, puntosLetra, puntos, setPuntosLetra, setPuntos, record };
};
