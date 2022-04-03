const { get } = require("express/lib/response");

var frutas = ["Manzana", "Pera", "Naranja", "Sandia"];
console.log(frutas);
console.log(frutas.length);
console.log(frutas[0]);
var masFrutas = frutas.push("Melon"); // Agrega un elemento al final del array
var ultimo = frutas.pop(); // elimina el ultimo elemento del array
var nueva = frutas.unshift("Melon"); //agrega al inicio
var quitaNuevo = frutas.shift(); // elimina el primer elemento
var posicion = frutas.indexOf("Pera"); // devuelve la posicion del elemento
var elimina = frutas.splice(2, 1); // elimina un elemento en la posicion indicada

class MyArray {
  constructor() {
    this.length = 0; // tamaño del array
    this.data = {}; // contenido del array
  }
  get(index) {
    return this.data[index]; // devuelve el elemento en la posicion indicada
  }
  push(item) {
    this.data[this.length] = item; // agrega un elemento al final del array
    this.length++; // incrementa el tamaño del array
    return this.data; // devuelve el array
  }
}
const myArray = new MyArray();