// . Given a string, create a simple program that will return the number of occurrences of each letter. The
// result should not ignore case.

const factoryItemRespuesta = (letra, repeticiones) => {
  return {letra, q: repeticiones};
};

const getRegExNoLetras = () => {

  /**esta es una reges muy simple, sirve para quitar caracteres que no sean alfa*/
  /* esto puede mejorarse */

  return /[\W]+/g;
};

const countOccurences = (texto) => {

  let textoClean = texto.replace(getRegExNoLetras(), '');

  let listaLetras = textoClean.split('');


  //buscar letrs unicas
  const dicLetras = new Set();
  listaLetras.forEach(letra => {
    dicLetras.add(letra);
  });


  const listaRespuesta = Array
      .from(dicLetras)
      .map(letra => {

        const repeticiones = listaLetras
            .filter(item => {
                return item===letra;
            }).length
        ;

        return factoryItemRespuesta(letra,repeticiones)
      })
  ;


  return listaRespuesta;

};


module.exports = countOccurences;
