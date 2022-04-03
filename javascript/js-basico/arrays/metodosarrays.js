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
var articulosFiltrados = articulos.filter(function (articulo) { // filter() devuelve un array con los elementos que cumplan la condición
    return articulo.precio > 100;
});
var nombreArticulos = articulosFiltrados.map(function (articulo) { // map devuelve un array con los nombres de los articulos
    return articulo.nombre;
});
