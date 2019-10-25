const assert = require('assert');
const countOccurences = require('../src/countOccurences');


const compararLista = (a, b) => {
  a.sort();
  b.sort();

  return JSON.stringify(a) === JSON.stringify(b);
};

describe('countOccurences', function () {

  it('should ok - caso basico sin espacios', function () {
    let respuesta = countOccurences("Hello");

    const respuestaEsperada=[ {letra:"H",q:1},{letra:"e",q:1}, {letra:"l",q:2} ,  {letra:"o",q:1}]
    var ope = compararLista(respuesta, respuestaEsperada);
    assert(ope);
  });

  it('should ok - caso basico con espacios', function () {
    let respuesta = countOccurences("H e l l o");

    const respuestaEsperada=[ {letra:"H",q:1},{letra:"e",q:1}, {letra:"l",q:2} ,  {letra:"o",q:1}]
    var ope = compararLista(respuesta, respuestaEsperada);
    assert(ope);
  });


});
