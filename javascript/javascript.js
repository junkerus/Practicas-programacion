/*variables
var numero = 5;
var numeroDos = 10;
var arreglo = [1,2,10, "david", true]*/


/*array
ciclos para recorrer
for(var i=0; i<5; i++){
    manera grupal
    //console.log(arreglo[i])
}//

/* manera individual
console.log(arreglo[3])*/

/*whil3
var i = 0;
/*ciclo repetitivos
while (i<25) {
    console.log(i);
    i ++;
}
/*variante 2 condiciones
do{
    console.log(i);
    i++;
}while(i<0); */

/*switch
var hora = 1;

metodo tradicional explicado abajo
if (hora<12) {
    console.log('buenos dias')    
}
if (hora>12){
    console.log('buenos tardes')    
} 
aplicando  switch ejemplo anterior
switch (hora) {
    case 10:
        console.log('son las 10 de la mañana');
        break;
    case 15:
        console.log('son las 15 de la mañana');
        break;

    default:
        console.log('a esta hora duermo');
        break;
} */

//funciones
/**manera tradicional
var num1 = 10;
let num2 = 20;
let resultado = num1 +num2;
console.log(resultado);

opcion 1
let num1 = 10;
let num2 = 20;

function suma() {
    return    console.log(num1 +num2);
}
suma()

opcion 2
function suma(num1,num2) {
    return    console.log(num1 +num2);
}
suma(10,63);*/
var lineBar = new ProgressBar.Line('#line-container', {
    color: 'orange',
    strokeWidth: 2,
    trailWidth: 0.5
});

lineBar.animate(1, {
    duration: 1000
});

var circleBar = new ProgressBar.Circle('#circle-container', {
    color: 'white',
    strokeWidth: 2,
    trailWidth: 10,
    trailColor: 'black',
    easing: 'easeInOut'
});

circleBar.animate(0.75, {
    duration: 1500
});

var semiBar = new ProgressBar.SemiCircle('#semi-container', {
    color: 'violet',
    strokeWidth: 2,
    trailWidth: 0.5,
    easing: 'bounce'
});

semiBar.animate(1, {
    duration: 3000
});