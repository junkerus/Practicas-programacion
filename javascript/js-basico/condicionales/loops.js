var estudiantes = ["maria", "juan", "pedro", "jose", "ana"];

function saludarEstudiantes(estudiante) { 
    console.log(`Hola,  ${estudiante}`);
}
    for (var i = 0; i < estudiantes.length; i++) { // mientras variable i sea menor a la longitud tamaño del array (estudiantes), i++ va aumentar el valor de i
        saludarEstudiantes(estudiantes[i]);
    }

    for (var estudiante of estudiantes) { // for of: sirve para iterar sobre un array
        saludarEstudiantes(estudiante);
        }

    while (estudiantes.length > 0) { // while: mientras la longitud sea mayor a 0, va a ejecutar el codigo
        var estudiante = estudiantes.shift(); // elimina el primer elemento del array
        saludarEstudiantes(estudiante);
    }    