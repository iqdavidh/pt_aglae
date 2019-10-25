const assert = require('assert');
const countPeaks = require('../src/countPeaks');


describe('countOccurences', function () {

  it('should ok - caso basico sin espacios', function () {

    let respuesta = countPeaks([1, 2, 2, 3, 4, 3, 5, 3, 2, 1, 2, 3, 3, 3, 2, 2, 1, 3]);

    const respuestaEsperada = "[1,2,2,3,(4),3,(5),3,2,1,2,(3,3,3),2,2,1,(3)]";

    assert(respuesta === respuestaEsperada);
  });

});
