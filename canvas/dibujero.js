// Funcionamiento de Texto Y Boton

var texto = document.getElementById("textoLineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick );

// Variables del dibujo

var color1 = document.getElementById("colorcito1");
var color2 = document.getElementById("colorcito2");
var color3 = document.getElementById("colorcito3");
var color4 = document.getElementById("colorcito4");
var color5 = document.getElementById("colorcito5");
var color6 = document.getElementById("colorcito6");

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var grande = document.getElementById("lienzoTamano");

// Funcion de dibujo

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

// Funcion del click

function dibujoPorClick() 
{
var x = parseInt(texto.value);

var lineas = x;
var l = 0;
var yi, xf;
var xi, yf;

// Funcion de canvas

var dimensiones = parseInt(grande.value);
d.width = dimensiones;
d.height = dimensiones;
var por = (d.width/x);

// Funcionamiento de color de lineas

var colorcito1 = color1.value;
var colorcito2 = color2.value;
var colorcito1 = color3.value;
var colorcito2 = color4.value;
var colorcito1 = color5.value;
var colorcito2 = color6.value;

for(l = 0; l < lineas; l++)
{
    yi = por * l;
    xf = por * (l + 1);
    dibujarLinea(colorcito1, 0, yi, xf, dimensiones);
    console.log("lineas " + l);
    xi = por * l;
    yf = por * (l + 1);
    dibujarLinea(colorcito2, xi, 0, dimensiones, yf);
}

var dim = dimensiones-1;

dibujarLinea(colorcito1, 1,1,1,dim);
dibujarLinea(colorcito1, 1,dim,dim,dim);
dibujarLinea(colorcito2, dim,dim,dim,1);
dibujarLinea(colorcito2, dim,1,1,1);
console.log(text);
}
