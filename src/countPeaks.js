/*
* 3. Given an array of strictly positive integers, determine the number of elements that are greater than
the adjacent elements (further known as peaks). If an adjacent element is an equal value, it would only
count as a peak if the next divergent number is smaller than the current element. Assume that there are
0 values outside of the bounds of the array, which may lead to a peak. e.g. [1, 2, 2, 3, 4, 3, 5, 3, 2, 1, 2,
3, 3, 3, 2, 2, 1, 3] can be thought of as 0, [1, 2, 2, 3, 4, 3, 5, 3, 2, 1, 2, 3, 3, 3, 2, 2, 1, 3], 0 and would
thus have the parenthesized peaks
* [1, 2, 2, 3, (4), 3, (5), 3, 2, 1, 2, (3, 3, 3), 2, 2, 1, (3)]
* */


const factoryNivelNodo = (valor) => {
  return {
    valor,
    contador: 1,
    isPeak: false
  }
};

const listaNivel = [];


const countPeaks = (lista, isReturnString = true) => {

  //crear la lista de niveles  -------------------------
  for (let i = 0; i < lista.length; i++) {

    const pivote = lista[i];


    if (i === 0) {
      listaNivel.push(factoryNivelNodo(pivote));
    } else {
      if (listaNivel[listaNivel.length - 1].valor === pivote) {
        //forma parte del mismo nivel
        listaNivel[listaNivel.length - 1].contador++;
      } else {
        listaNivel.push(factoryNivelNodo(pivote));
      }
    }

  }

  let puntodebug = 0;
  //ver si un nuvel sobre sale de sus extremos ----------------------------------------


  for (let i = 0; i < listaNivel.length; i++) {

    let isPeackL = true;
    if (i > 0) {
      //comparar el valor del nivel con el de la izquierda
      isPeackL = listaNivel[i].valor > listaNivel[i - 1].valor;
    }
    let isPeackR = true;
    if (i < listaNivel.length - 1) {
      //comparar el valor del nivel con el de la derecha
      isPeackR = listaNivel[i].valor > listaNivel[i + 1].valor;
    }


    listaNivel[i].isPeak = isPeackL && isPeackR;

  }

  let listaTexto = listaNivel
      .map(item => {
        let texto = new Array(item.contador).fill(item.valor).join(',');

        if (item.isPeak) {
          texto = `(${texto})`;
        }

        return texto;
      })
  ;


  let respuesta = listaTexto.join(',');


  //cosntruir respuesta


  return  '[' + respuesta + ']';


};

module.exports = countPeaks;
