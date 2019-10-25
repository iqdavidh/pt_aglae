/*1. Given an array with n integers and a number k, can you determine if there is a pair of 2 elements that
sums to k? Create a simple program that will return the indices of the first encounter of the correct 2
numbers. You may manipulate the array if necessary.
    function findSum(arr, sumValue) {
...
}
findSum([1, 20, 13, 16], 29) findSum([3, 15, 18, 8, -1], 17)
*/


const findSum = (lista, valorBuscado) => {

  if(lista=== undefined || lista===null  || valorBuscado=== undefined || valorBuscado === null ){
    return false;
  }

  if(lista.length===0){
    return lista[0]===valorBuscado;
  }

  /* relmetne tenemos un array - suponemos que son int*/
  let numItems=lista.length;

  for(let i=0; i< (numItems-1); i++){
    const pivote=lista[i];

    for(let j=i+1 ; j<numItems;j++){
      const cursor=lista[j];

      const suma=pivote+cursor;

      if(suma===valorBuscado){
        return true;
      }
    }

  }

  return false;

};

module.exports = findSum;
