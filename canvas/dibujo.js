var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

dibujarLinea("blue",149,149,120,10)
dibujarLinea("green",150,150,121,11)
dibujarLinea("red",151,151,122,12)
dibujarLinea("yellow",152,152,123,13)
dibujarLinea("purple",153,153,124,14)
dibujarLinea("orange",154,154,125,15)
dibujarLinea("pink",155,155,126,16)




function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle= color;
    lienzo.arc(xinicial,yinicial,xfinal,0, yfinal*Math.PI);
    lienzo.stroke();
    lienzo.closePath();
}
