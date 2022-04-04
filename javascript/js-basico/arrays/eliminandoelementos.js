// metodo .push() este metodo agrega un elemento al final del array
let array = [1, 2, 3, 4, 5];
// agrega un elemento al final del array

//funcion
function newNum() {
    //agrega un elemento al final del array
    numArray.push(6, 7, 8, 9, 10);
    // reviso el array que ahora tiene los numeros agragados
    console.log(numArray);
}
// llamo a la funcion
newNum(); // resultado: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// metodo .pop() este metodo elimina el ultimo elemento del array
// array inicial
//let array = [1, 2, 3, 4, 5];
// elimina el ultimo elemento del array
//let shiftArray = array.pop();
// reviso el array que ahora tiene los numeros eliminados
console.log(array); // resultado: [1, 2, 3, 4]

// metodo .shift() // este metodo elimina el primer elemento del array
// array inicial
//let array = [1, 2, 3, 4, 5];
// elimina el primer elemento del array
let shiftArray = array.shift();
// reviso el array que ahora tiene los numeros eliminados
console.log(array); // resultado: [2, 3, 4, 5]

// metodo .unshift() // este metodo agrega un elemento al inicio del array
// array inicial
//let array = [1, 2, 3, 4, 5];
// agrega un elemento al inicio del array
let unshiftArray = array.unshift(0);
// reviso el array que ahora tiene los numeros agragados
console.log(array); // resultado: [0, 1, 2, 3, 4, 5]

// metodo .indexOf() // este metodo devuelve el indice del elemento que se le pasa como parametro
