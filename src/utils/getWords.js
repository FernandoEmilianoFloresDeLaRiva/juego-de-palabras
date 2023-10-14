import { PALABRAS } from "../constants/PALABRAS";

export async function getWords() {
  //El algoritmo empleado se llama "algoritmo de Fisher-Yates"
  let indice = await Math.round(Math.random() * 100);
  let word = await PALABRAS[indice];
  let caracteres = word.split("");
  // Itera sobre cada letra de la palabra (desde el último hasta el primero)
  for (let i = caracteres.length - 1; i > 0; i--) {
    const indiceCaracter = Math.floor(Math.random() * (i + 1));
    // Intercambia los caracteres en las posiciones i y j
    [caracteres[i], caracteres[indiceCaracter]] = [
      caracteres[indiceCaracter],
      caracteres[i],
    ];
  }
  const objetoWord = {
    orderWord: word.split(""),
    reverseWord: caracteres,
  };
  return objetoWord;
}
