var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
//var color = "green";
var estado = 0;
var x, y;

document.addEventListener("mousedown",mousePresionado);
document.addEventListener("mouseup",mouseSuelto);
document.addEventListener("mousemove",dibujarMouse);

           //movimiento con Raton
          
           function mousePresionado(evento)
           {
               estado = 1;
               x = evento.x;
               y = evento.y;
           }
           
           function mouseSuelto(evento)
           {
               estado = 0;
               x = evento.x;
               y = evento.y;
           }
           
           function dibujarMouse(evento)
           {
               var colorcito = "green";
               
               if(evento.srcElement == cuadrito & estado == 1)
               {
                   console.log(evento);
                   dibujarLinea(colorcito, x, y, evento.x, evento.y, papel);
                   x = evento.x;
                   y = evento.y;        
               }
           }
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

