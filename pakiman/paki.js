var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";
imagenes["Dino"] = "Dino.png";
imagenes["Tiguernauro"] = "tigre.png";
imagenes["Pinguinauro"] = "pingui.png";

var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30) );
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));
coleccion.push(new Pakiman("Dino", 130, 60));
coleccion.push(new Pakiman("Tiguernauro", 150, 80));
coleccion.push(new Pakiman("Pinguinauro", 75, 20));

for(var peleados of coleccion)
{
  peleados.mostrar();
}

for(var x in coleccion[0])
{
  console.log(x);
}