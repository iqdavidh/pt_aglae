const assert = require('assert');
const countOccurences = require('../src/countOccurences');

const fnSort = (a, b) => {
  if (a.letra === b.letra) {
    return 0
  }

  return a.letra > b.letra;
};
const compararLista = (lista1, lista2) => {


  lista1.sort(fnSort);
  lista2.sort(fnSort);

  return JSON.stringify(lista1) === JSON.stringify(lista2);
};

describe('countOccurences', function () {

  it('should ok - caso basico sin espacios', function () {
    let respuesta = countOccurences("Hello");

    const respuestaEsperada = [{letra: "H", q: 1}, {letra: "e", q: 1}, {letra: "l", q: 2}, {letra: "o", q: 1}];
    var ope = compararLista(respuesta, respuestaEsperada);
    assert(ope);
  });

  it('should ok - caso basico con espacios y no letras', function () {
    let respuesta = countOccurences("H e l l o {,.");

    const respuestaEsperada = [{letra: "H", q: 1}, {letra: "e", q: 1}, {letra: "l", q: 2}, {letra: "o", q: 1}];
    var ope = compararLista(respuesta, respuestaEsperada);
    assert(ope);
  });


  it('should ok - caso basico pero letras inverso - para probar el comparador del test', function () {
    let respuesta = countOccurences("olleH");

    const respuestaEsperada = [{letra: "H", q: 1}, {letra: "e", q: 1}, {letra: "l", q: 2}, {letra: "o", q: 1}];
    var ope = compararLista(respuesta, respuestaEsperada);
    assert(ope);
  });


  it('should false - caso no coincie case', function () {
    let respuesta = countOccurences("hello");

    const respuestaEsperada = [{letra: "H", q: 1}, {letra: "e", q: 1}, {letra: "l", q: 2}, {letra: "o", q: 1}];
    var ope = compararLista(respuesta, respuestaEsperada);
    assert(!ope);
  });

});
