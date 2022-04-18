// Código del cuadrado
console.group("Cuadrados");
/*const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");*/


/*Perimetro del cuadrado
const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");*/

//Con funciones para perimetro
 function perimetroCuadrado(lado) {
  return lado * 4;
}

//Area del cuadrado
/*const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("La area del cuadrado es: " + areaCuadrado + "cm^2");*/

//con funciones para el area
function areaCuadrado(lado) {
  return lado * lado;
}
console.groupEnd("Cuadrados");


// Código del triángulo
console.group("Triángulos");

/*const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(
 "Los lados del triángulo miden: "
 + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm" );
 //altura del triangulo
console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");*/

//Perimetro del triangulo
/*const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");*/

//Perimetro del triangulo con Funciones
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

//Area del triangulo
/*const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("La área del triángulo es: " + areaTriangulo + "cm^2");*/

//Area del triangulo con Funciones
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd("Triángulos");

//Circulos
console.group("Círculos");

// Radio
/*const radioCirculo = 4;
console.log("El radio del círculo es: " + radioCirculo + "cm");*/

//Radio del circulos con Funciones
function radioCirculo(radio) {
    return radio;
}

// Diametro
/*const diametroCirculo = radioCirculo * 2;*/

//diametro de circulo con Funciones
function diametroCirculo(radio) {
    return radio * 2;
}

  // PI
  const PI = Math.PI;
  console.log("PI es: " + PI);
  
  // Circunferencia
  /*const circunferenciaCirculo = diametroCirculo * PI;
    console.log("La circunferencia del círculo es: " + circunferenciaCirculo + "cm");*/

//circunferencia del circulo con funciones
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
  }
  
  // Area
  /*const areaCírculo = (radioCirculo * radioCirculo) * PI;
    console.log("La área del círculo es: " + areaCírculo + "cm^2");*/

  //Area del circulo con funciones
 function areaCirculo(radio) {
    return (radio * radio) * PI;
  }
  
  console.groupEnd("Círculos");
  
  
  // Aquí interactuamos con el HTML
  function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
  
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
  }
  function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
  
    const area = areaCuadrado(value);
    alert(area);
  }