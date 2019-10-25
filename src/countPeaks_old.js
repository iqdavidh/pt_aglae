/*
* 3. Given an array of strictly positive integers, determine the number of elements that are greater than
the adjacent elements (further known as peaks). If an adjacent element is an equal value, it would only
count as a peak if the next divergent number is smaller than the current element. Assume that there are
0 values outside of the bounds of the array, which may lead to a peak. e.g. [1, 2, 2, 3, 4, 3, 5, 3, 2, 1, 2,
3, 3, 3, 2, 2, 1, 3] can be thought of as 0, [1, 2, 2, 3, 4, 3, 5, 3, 2, 1, 2, 3, 3, 3, 2, 2, 1, 3], 0 and would
thus have the parenthesized peaks
* [1, 2, 2, 3, (4), 3, (5), 3, 2, 1, 2, (3, 3, 3), 2, 2, 1, (3)]
* */


const nivelNodos={
  valor:0
};



const countPeaks = (lista, isReturnString = true) => {

  //TODO validar que es un array lo que se va a procesar y tiene mas de 1 elemento
  //sin validación de argumentos porquye ya no hay tiempo


  const listaNodos = [];

  for (let i = 0; i < lista.length; i++) {

    const pivote = lista[i];

    const nodo = new Nodo(pivote);

    let L = null;
    let R = null;

    if (i < (lista.length-1)) {
      //inicio o medio
      R = lista.slice(i + 1);
    }

    if (i >0) {
      // desde
      L = lista.slice(0, i);
    }



    nodo.evaluarSiEsPick(L, R);

    listaNodos.push(nodo);
  }

  //unironodos


  let respuesta = "";

  if (isReturnString) {

    listaNodos.forEach((n, index) => {
      respuesta = respuesta === "" ? '' : ',';
      respuesta += n.printString()
    });

    respuesta = `[${respuesta}]`;

  } else {

  }


  return respuesta;


};

module.exports = countPeaks;
