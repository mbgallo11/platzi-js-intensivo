var decision = prompt("piedra, papel o tijera?");

switch (decision) {
    case "piedra": 
        console.log("Ganaste")
        break;
    case "papel": 
        console.log("Perdiste")
        break;
    case "tijera":
        console.log("Empate caon")
        break;
    default:
        console.log("No seleccionaste nada")
}
