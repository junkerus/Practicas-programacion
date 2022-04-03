function auto (marca, modelo, anio){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
}

while(true){ // Bucle infinito
    var opcion = prompt("Ingrese una opcion: \n 1. Agregar auto \n 2. Mostrar autos \n 3. Salir");
    if(opcion == 1){
        var marca = prompt("Ingrese la marca del auto");
        var modelo = prompt("Ingrese el modelo del auto");
        var anio = prompt("Ingrese el año del auto");
        var autoNuevo = new auto(marca, modelo, anio);
        console.log(autoNuevo);
    }
    else if(opcion == 2){ // Mostrar autos
        console.log(autoNuevo);
        console.log(autoNuevo2);
        console.log(autoNuevo3);
        console.log(autoNuevo4);
    }
    else if(opcion == 3){ // Salir
        break;
    }
}