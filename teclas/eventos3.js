var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
  };
  
    console.log(teclas);
document.addEventListener("mousedown",mousePresionado);
document.addEventListener("mouseup",mouseSuelto);
document.addEventListener("mousemove",dibujarMouse);

            //movimiento con teclado
document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("red", x-1, y-1, x+1, y+1, papel);

    // Funcion de dibujo

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
 
    // funcion captura del teclado

function dibujarTeclado(evento)
{
    
var colorcito = "green";
var movimiento = 3;
        //Usando SWICTH

    switch(evento.keyCode)
    {
    case teclas.UP: 
        dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
        y = y - movimiento;
    break;
    case teclas.DOWN:
        dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
        y = y + movimiento;
    break;
    case teclas.LEFT:
        dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
        x = x - movimiento;
    break;
    case teclas.RIGHT:
        dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
        x = x + movimiento;
    break;
    }
}

var estado = 0;
var xi, yi;
           //movimiento con Raton
          
function mousePresionado(evento)
{
    estado = 1;
    xi = evento.x;
    yi = evento.y;
}
           
function mouseSuelto(evento)
{
    estado = 0;
    xi = evento.x;
    yi = evento.y;
}
           
function dibujarMouse(evento)
{
    var colorcito = "purple";
               
    if(evento.srcElement == cuadrito & estado == 1)
        {
            console.log(evento);
            dibujarLinea(colorcito, xi, yi, evento.x, evento.y, papel);
            xi = evento.x;
            yi = evento.y;        
        }
}
