const assert = require('assert');
const findSum = require('../src/findSum');


describe('prueba 1', function () {

  it('should ok - cuando solo hay una posibilidad', function () {
    let respuesta = findSum([1, 20, 13, 16], 36);
    assert(respuesta, "no se encontro el valor");
  });

  it('should ok - cuando solo hay mas de una posibilidad', function () {
    let respuesta = findSum([1, 20, 13, 16, 21,0], 21);
    assert(respuesta, "no se encontro el valor");
  });


  it('should false - cuando no hay elementos', function () {
    let respuesta = findSum([], 29);
    assert(!respuesta, "no se encontro el valor");
  });

  it('should false  -cuando no hay valor', function () {
    /*sollo*/
    let respuesta = findSum([1, 20, 13, 16, 21,0]);
    assert(!respuesta, "no se encontro el valor");
  });

  it('should false - cuando no hay posibilidad', function () {
    let respuesta = findSum([1, 20, 13, 16], 0);
    assert(!respuesta, "no se encontro el valor");
  });


});
