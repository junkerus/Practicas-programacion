var pdra = "piedra";
var ppl = "papel";
var tjra = "tijera";

var resultado = function(user, cpu) {
    
    switch(true){
        case user === pdra && cpu === tjra:
            console.log("ganaste " + pdra);
            break;
        case user === ppl && cpu === pdra:
            console.log("ganaste " + sda);
            break;
        case user === tjra && cpu === ppl:
            console.log("ganaste " + tjra);
            break;
        case (user === cpu):
            console.log("Empate");
            break;
        default:
            console.log("")
    }
}
    resultado (ppl,tjra)