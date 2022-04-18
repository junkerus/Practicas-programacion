/*Durante este taller aprendimos a calcular el área y perímetro de un triángulo
conociendo la longitud de sus 3 lados y también su altura.

En este ejercicio debes crear una función para calcular la altura de un triángulo isósceles.

La función debe recibir, como parámetros, la longitud de los 3 lados del triángulo.
La función debe validar que la longitud de los 3 lados del triángulo corresponden a un triángulo isósceles.
La función debe retornar la altura del triángulo.
Pista: la función Math.sqrt de JavaScript puede ayudarte a calcular raíces cuadradas.*/

//Calculo de la altura de un triangulo isosceles

function calcularAlturaTriangulos() {
    var lado1 = parseInt(prompt("Ingrese la longitud del primer lado"));
    var lado2 = parseInt(prompt("Ingrese la longitud del segundo lado"));
    var lado3 = parseInt(prompt("Ingrese la longitud del tercer lado"));
    var altura = 0;
    var perimetro = lado1 + lado2 + lado3;
    var area = (perimetro / 2) * (perimetro / 2);
    var altura = Math.sqrt(area);
    if (lado1 == lado2 && lado2 == lado3) {
        alert("El triangulo es equilatero");
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        alert("El triangulo es isosceles");
    } else {
        alert("El triangulo es escaleno");
    }
    alert("El perimetro del triangulo es: " + perimetro + " y su altura es: " + altura);
}

