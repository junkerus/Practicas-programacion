var articulos = [
    { nombre: "Monitor", precio: 300 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Ratón", precio: 10 },
    { nombre: "Impresora", precio: 200 },
    { nombre: "Proyector", precio: 150 },
    { nombre: "CPU", precio: 500 },
    { nombre: "Motherboard", precio: 100 },
    { nombre: "Memoria RAM", precio: 30 },
    { nombre: "Discoduro", precio: 70 },
    { nombre: "Tarjeta de video", precio: 120 },
    { nombre: "Tarjeta madre", precio: 80 },
    { nombre: "Tarjeta de sonido", precio: 40 },
    { nombre: "Cable HDMI", precio: 15 },
];
var resultado = articulos.find(function (articulo) { // es un metodo de array que devuelve el primer elemento que cumpla con la condicion
    return articulo.nombre === "Discoduro";
});
console.log(resultado);

articulos.forEach(function (articulo) { // es un metodo de array que recorre el array y ejecuta una funcion
    console.log(articulo.nombre);
});

var articulosEconomicos = articulos.some(function (articulo) { //* es un metodo de array que devuelve true si algun elemento cumple con la condicion y false si no lo hace*//
    return articulo.precio < 100;
});
articulosEconomicos; // devuelve true
