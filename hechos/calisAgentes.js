function agente (nombre,campaña,supervisor){
    this.nombre = nombre;
    this.campaña = campaña;
    this.supervisor = supervisor;
}

let newAgente = [];
    for (let i=0; i < 3; i++){
        let nombre = prompt("nombre");
        let campaña = prompt("campaña");
        let supervisor = prompt("supervisor");
    newAgente.push(new agente(nombre,campaña,supervisor));
}
for (let i = 0; i < agente.length; i++){ //mientras i valga menos o igual que el arreglo, se imprimira su indice
    console.log(autos[i]);
}