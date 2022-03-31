var a = 4 + "7";

typeof  a; // ver el tipo de dato de la variable

var b = 4 * "7"; //coercion implicita
typeof b ;

var c = 20; // +++++++++  como hacer coercion explicita
var d = c + "";
typeof d; //nos dira que es un string

var e = String(c); //asi se forza la coercion explicita
typeof c; // nos va dar un string
console.log(c); // nos dara como resultado un 20 string


//vamos a generar ahora un numero
var f = Number(e);
typeof e; //nos dara como resultado numero