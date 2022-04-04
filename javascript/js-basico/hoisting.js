hoisting // hoisting es una técnica que permite que las variables sean declaradas antes de ser utilizadas.

var miNombre;
minombre = "Juan";
console.log(); // sirve para imprimir en la consola

hey();

function hey() { //El Hoisting es un proceso del compilador de JavaScript, 
    //que consiste en que la declaracion de las variables y las funciones son llevadas
    //al inicio del codigo, sin importar su posicion, para su procesamiento, sin embargo,
    //la inicializacion de las variables no es llevada al inicio del codigo para su compilacion,
    //sino solo su declaracion, lo cual suele dar espacio a errores cuando se declara una variable 
    //sin inicializarla y se procesa en el codigo antes de haber llegado a su inicializacion,
    ///lo cual nos suele dar una variable con valor undefined, ya que la variable sí fue almacenada
    //en memoria, pero no se le asigno un valor hasta despues de su ejecución.
  console.log("Hola");
}
var miNombre = "jesus";