var a = 4 + "7";

typeof  a; //resulatado: "string"

var b = 4 * "7"; //coercion implicita
typeof b ; // resultado: number

var c = 20; //   como hacer coercion explicita
var d = c + "";
typeof d; // resultado: string

var e = String(c); //asi se forza la coercion explicita
typeof c; // resultado: number
console.log(c); // nos dara como resultado un 20 string


//vamos a generar ahora un numero
var f = Number(e);
typeof e; //nos dara como resultado numero
