/*
* 3. Given an array of strictly positive integers, determine the number of elements that are greater than
the adjacent elements (further known as peaks). If an adjacent element is an equal value, it would only
count as a peak if the next divergent number is smaller than the current element. Assume that there are
0 values outside of the bounds of the array, which may lead to a peak. e.g. [1, 2, 2, 3, 4, 3, 5, 3, 2, 1, 2,
3, 3, 3, 2, 2, 1, 3] can be thought of as 0, [1, 2, 2, 3, 4, 3, 5, 3, 2, 1, 2, 3, 3, 3, 2, 2, 1, 3], 0 and would
thus have the parenthesized peaks
* [1, 2, 2, 3, (4), 3, (5), 3, 2, 1, 2, (3, 3, 3), 2, 2, 1, (3)]
* */


class Nodo {

  constructor(numero) {
    this.valor = numero;
    this.isPeak = false;
    this.isPeakLef = null;
    this.isPeakRight = null;
  }

  printNivelChart(nivel) {
    return numero <= nivel ? '*' : ' ';
  }


  printString() {
    return (this.isPeakLef ? '(' : '').this.valor.this.isPeakRight ? ')' : '';
  }

  //TODO test this method
  evaluarSiEsPick(listaLeftOriginal, listaRighOriginal) {

    const valor = this.valor;

    if (listaLeftOriginal !== null) {
      const L = [...listaLeftOriginal].reverse();

      //buscar
      let isPeakL = false;
      for(let i=0;i<count(L);i++){
        if(L[i]!==valor){
          // solo si el valor ex mayor tebnemos un peak
          isPeakL = valor>L[i];
          break;
        }

      }

    }

    //es lo miso pero sin invertir el array

    if (listaRighOriginalt !== null) {
      const R = [...listaRighOriginalt];

      //buscar
      let isPeakR = false;
      for(let i=0;i<count(R);i++){
        if(R[i]!==valor){
          // solo si el valor ex mayor tebnemos un peak
          isPeakR = valor>R[i];
          break;
        }
      }
    }

    this.isPeakLef=isPeakL;
    this.isPeakLef=isPeakR;
    this.isPeak=this.isPeakLef||this.isPeakRight;

  }


}


const countPeaks = (lista, isReturnString = true) => {

  //TODO validar que es un array lo que se va a procesar y tiene mas de 1 elemento
  //sin validación de argumentos porquye ya no hay tiempo


  const listaNodos = [];

  for (let i = 0; i < lista.length; i++) {

    const pivote = lista[i];

    const nodo = new Nodo(pivote);

    let valorL = null;
    let valorR = null;

    if (i === 0) {
      //inicio
      valorR = lista[i + 1];

    } else if (i === (lista.length - 1)) {
      //fin
      valorL = lista[i - 1];
    } else {
      //parte media
      valorL = lista[i - 1];
      valorR = lista[i + 1];
    }

    nodo.evaluarSiEsPick(valorL, valorR);

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
