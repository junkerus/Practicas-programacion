var pra = "piedra"; var sda = "papel"; var tra = "tijera";
var resultado = function(user, cpu){
    if(user != cpu){
        if(user === pra && cpu === tra){
            console.log("el usuario GANO con "+ pra)
        }else if(user === sda && cpu === pra){
            console.log( "el usuario GANO con " + sda)
        }else if(user === tra && cpu === sda){
            console.log("el usuario GANO con " + tra)
        }else{
            console.log("La CPU Gano!!")
        }
    }else if(user === cpu){
        console.log("Empate")
    }
};
resultado(op1,op3);