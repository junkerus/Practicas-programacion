var imagenes = [];
imagenes["100"] ="billete100.png";
imagenes["50"] = "billete50.png";
imagenes["20"] = "billete20.png";
imagenes["10"] = "billete10.png";
imagenes["05"] = "billete05.png";
imagenes["01"] = "billete01.png";

class Billete
{
  constructor(v, c)
  {
    this.valor = v;
    this.cantidad = c;
    this.imagen = new Image();
    this.imagen.src = imagenes[this.valor];
  }
}

var caja = [];
//var entregado = [];

caja.push(new Billete(100, 5));
caja.push(new Billete(50, 10));
caja.push(new Billete(20, 30));
caja.push(new Billete(10, 50));
caja.push(new Billete(05, 40));
caja.push(new Billete(01, 60));

contar();
//var dinero = 0;

var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);

function entregarDinero() 
{
    var impresiones = [];
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    //for (var bi of caja)
  //{
    //if (dinero > 0) 
        if (total >= dinero)
    {
        for(var bi of caja)
        
            {
                if(dinero > 0)
                {
                    div = Math.floor(dinero / bi.valor);
                    if(div > bi.cantidad)
                    {
                        papeles = bi.cantidad;
                    }
                    else
                    {
                        papeles = div;
                    }
                    //entregado.push(new Billete (bi.valor, papeles));
                    bi.cantidad = bi.cantidad - papeles;
                    //dinero = dinero - (bi.valor * papeles);
                    for(var i = 0; i < papeles; i++)
                    {
                        impresiones.push ( new Billete(bi.valor, 1));
                    }
                        dinero -= (bi.valor * papeles); 
                }
            }
            //if (dinero > 0)
            if (dinero == 0)
            {
                resultado.innerHTML += "<strong> Monto Retirado: <strong/><br />";
                for(var e of impresiones)
                {
                    //}
                    //else
                    resultado.innerHTML += "<img src=" + e.imagen.src + " />";
                }
                resultado.innerHTML += "<hr />";
                contar();
            }
            else
            {
                resultado.innerHTML += "No Tengo El Monto Requerido, Intente Otro Valor <hr />";
                //for(var e of entregado)
            }
        }
        else
        {
            resultado.innerHTML += "Se Excede el Limite Disponible <hr />";
        }
}
        function contar()
        {
            total = 0
            for (var tot of caja)
            {
                total = total + tot.valor * tot.cantidad;
            }
            console.log(total);
        }
        //{
           // if(e.cantidad > 0)
           //     resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br />";
           // }  
        //}
        
   // }