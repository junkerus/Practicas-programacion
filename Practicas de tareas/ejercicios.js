/*Tarea practica

A continuación te dejo ejercicios para que conviertas tus algoritmos en funciones recursivas:

Ejercicio 1
Escribe una función recursiva para un timer que cada 5 minutos se agregue 10 minutos más a su cuenta total.

Ejercicio 2
Escribe una función recursiva para encontrar el número mayor de un array.

Ejercicio 3
Escribe una función recursiva para convertir de minúscula a mayúscula el primer y último carácter de un string.

Ejercicio 4
Escribe una función recursiva para escribir la serie Fibonacci hasta su décima iteración.

Ejercicio 5
Escribe una función recursiva para generar un password aleatorio con 20 caracteres combinando 
letras-números-símbolos-números-letras-día-new-año.*/

//funcion de cuenta regresiva para el Feliz año
function cuentaRegresiva(numero) {
    numero -= 1;
    if (numero > 0) {
        console.log(numero)
        cuentaRegresiva(numero);
        
    }else{
        console.log("feliz Año Nuevo");
    }
           
}

//funcion para un timer que cada 5 minutos se agregue 10 minutos más a su cuenta total.
function timer(minutos) {
    minutos += 1;
    if (minutos > 0) {
      console.log(minutos);
        timer(minutos);
    {else if (minutos > 5) {
        cuentaTotal(minutos + 10);
        console.log(cuentaTotal);
        }
    }
    }
}   

