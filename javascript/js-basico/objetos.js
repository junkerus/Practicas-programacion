var miAuto = {  // Objeto
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2019,
    color: "Blanco",
    motor: "1.6",
    patente: "ABC123",
    precio: 30000,

    mostrarInformacion: function () { // function
        console.log(this.marca + " " + this.modelo + " " + this.anio + " " + this.color + " " + this.motor + " " + this.patente + " " + this.precio); // this: referencia al objeto
        // console.log(`Auto: ${this.marca} ${this.modelo} ${this.anio} ${this.color} ${this.motor} ${this.patente} ${this.precio}`); // Template String
    }
};
console.log(miAuto); // Muestra el objeto completo

function auto(marca, modelo, anio, color, motor, patente, precio) { // Constructor
    this.marca = marca; // this: referencia al objeto
    this.modelo = modelo;
    this.anio = anio;
    this.color = color;
    this.motor = motor;
    this.patente = patente;
    this.precio = precio;
}
    var autoNuevo = new auto("Toyota", "Corolla", 2019, "Blanco", "1.6", "ABC123", 30000); // Objeto
    console.log(autoNuevo); // Muestra el objeto completo

var autoNuevo2 = new auto("ford", "fiesta", 2019, "Plata", "1.6", "ABC456", 15000); // Objeto
var autoNuevo3 = new auto("tesla", "model 3", 2019, "Negro", "3.0", "def321", 520000);
var autoNuevo4 = new auto("Renault", "clio", 2008, "Azul", "1,3", "ghi2019", 18000);