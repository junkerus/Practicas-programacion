var texto = document.getElementById("textoLineas");
var boton = document.getElementById("botoncito");

boton.addEventListener("click", dibujoPorClick );
var d = document.getElementById("dibujito");

//var ancho = d.width;
var lienzo = d.getContext("2d");
var grande = document.getElementById("volumen");

//Funcion del Dibujo
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle= color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

    //Funcion del Click
function dibujoPorClick()
{   var z = parseInt(texto.value);
    var lineas = z;
    var l = 0;
    var yi, xf, xi, yf;
       //var espacio = ancho / lineas;
    
    // Funcion de canvas
    var dimensiones = parseInt(grande.value);
    d.width = dimensiones;
    d.height = dimensiones;
    var por = (d.width/z)

    // Funcionamiento de color de lineas
    var colorcito = "purple";
    var colorcito2 = "green";
    var colorcito3 = "orange";
    var colorcito4 = "red";

    for( l= 0; l < lineas; l++)
    {
        yi = yf = por * l;
        xi = xf = por * (l + 1);
       
        nxi = dimensiones - xi;
        nyf = dimensiones - yf;
       
        dibujarLinea(colorcito, 0, yi, xf, dimensiones);
        dibujarLinea(colorcito2, yi, 0, dimensiones, xf);
        dibujarLinea(colorcito3, nxi, dimensiones, dimensiones, yf);
        dibujarLinea(colorcito4, 0, nxi, yf, 0);
        console.log("Linea " + l);
    }
    var dim = dimensiones -1;

        dibujarLinea(colorcito,1,1,1,dim)
        dibujarLinea(colorcito,1,dim,dim,dim)
        dibujarLinea(colorcito2,dim,1,1,1)
        dibujarLinea(colorcito2,dim,dim,dim,1)
        console.log(texto);
    xy = lienzo.canvas.width
        for (var xi2 = por; xi2 < (xy/2); xi2+=8)
        {
        dibujarLinea(colorcito2,xi2,xy/2,xy/2,(xy/2)+xi2)
        dibujarLinea(colorcito3,xi2,(xy/2),(xy/2),(xy/2)-xi2)
        dibujarLinea(colorcito,xy-xi2,(xy/2),(xy/2),(xy/2)-xi2)
        dibujarLinea(colorcito4,xy-xi2,(xy/2),(xy/2),(xy/2)+xi2)
        }

    alert("Preparando la Magia" );
}
