var decision = prompt("piedra, papel o tijera?");

function jugar(decision) {
    if (decision == "piedra"){
        console.log("Ganaste")
    }else if (decision == "papel"){
        console.log("Perdiste")
    }else{
        console.log("Empate caon")
        }
    }
jugar(decision)