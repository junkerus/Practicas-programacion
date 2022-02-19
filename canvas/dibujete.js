var texto = document.getElementById("texto_lineas");

var boton = document.getElementById("botoncito");

var opciones_color = document.getElementById("colorsote")

var captura = "red";

opciones_color.addEventListener("change", function (){

  captura = opciones_color.value;



});

boton.addEventListener("click", dibujoporClick);

var d = document.getElementById("dibujito");

var ancho = d.width;

var lienzo = d.getContext("2d");



function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)

{

  lienzo.beginPath();

  lienzo.strokeStyle = color;

  lienzo.moveTo(xinicial, yinicial);

  lienzo.lineTo(xfinal, yfinal);

  lienzo.stroke();

  lienzo.closePath();

}



dibujarLinea(captura, d.width - 1,1,d.width-1,d.height);

dibujarLinea(captura, 1,1,d.width - 1,1);

dibujarLinea(captura, 1,1,1,d.height);

dibujarLinea(captura, 1,d.height - 1,d.width - 1,d.height - 1);



function dibujoporClick()

{

  var lineas = parseInt(texto.value);

  var l = 0;

  var yi, xf;

  var xi, yf;

  var colorsito = captura;

  var espacio = ancho / lineas;



  d.width = d.width;

  d.height = d.height;



  dibujarLinea(captura, d.width - 1,1,d.width-1,d.height);

  dibujarLinea(captura, 1,1,d.width - 1,1);

  dibujarLinea(captura, 1,1,1,d.height);

  dibujarLinea(captura, 1,d.height - 1,d.width - 1,d.height - 1);



  for (l = 0; l < lineas; l++)

  {

    yi = espacio * l;

    xf = espacio * (l + 1);

    dibujarLinea(colorsito,0,yi,xf,d.height);

  }



}