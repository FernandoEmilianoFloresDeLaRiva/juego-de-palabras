import { useEffect, useState } from "react";
import { getWords } from "../utils/getWords";

export const useWord = (gameOver, setIndexInput) => {
  const recordInital = localStorage.getItem("record") !== null ? localStorage.getItem("record") : 0
  const [record, setRecord] = useState(recordInital);
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
        setIndexInput(0)
      }
    };
    handlePuntos();
  }, [puntosLetra]);
  return { word, puntos, setPuntosLetra, setPuntos, record };
};
