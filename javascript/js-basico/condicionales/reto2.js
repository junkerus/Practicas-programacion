var pra = "piedra"; var sda = "papel"; var tra = "tijera";
var resultado = function (user, cpu) {
    swicth(true){
        case user === pra && cpu === tra:
console.log("ganaste " + pra);
break;
        case user === sda && cpu === pra:
console.log("ganaste " + sda);
break;
        case user === tra && cpu === sda:
console.log("ganaste " + tra);
break;
console.log("perdiste!");
        default user === cpu:
console.log("Empate");
break;
        }
    }

var pregunta = prompt("Ingresa tu opción: piedra, papel o tijera ");
var user = pregunta.toLowerCase();
var options = ["piedra", "papel", "tijera"];
var machine = options[Math.floor(Math.random() * 3)];


// let numero = 'a';
//con true los casos van a pasar 
switch (true) {
    case (user === machine):
        console.log('es un empate');
        break;
    case (machine === 'piedra' && user === 'papel'):
        console.log('Ganaste')
        break;
    case (machine === 'papel' && user === 'tijera'):
        console.log('Ganaste')
        break;
    case (machine === 'tijera' && user === 'piedra'):
        console.log('Ganaste')
        break;
    default:
        console.log('¡Perdiste!');
}