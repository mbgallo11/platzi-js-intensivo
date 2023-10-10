/* let miAuto = {
    marca: "Kia",
    modelo: "Rio",
    annio: 2017,
    detalleDelAuto: function (){ //una propiedad que es una funcion se llama "metodos de objetos"
        console.log(`Auto ${this.marca} ${this.modelo} ${this.annio}`) //"this" hace referencia a su padre, al objeto
    }
};

miAuto.detalleDelAuto(); */


function auto (marca, modelo, annio) { //se declara la funcion con un nombre y campos.
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}
let autos = []; //se crea un arreglo para guardarlos en memoria
    for (let i = 0; i < 5; i++){ //loop para definir cuantos guardar
        let marca = prompt("Ingresa la marca:"); 
        let modelo = prompt("Ingresa el modelo:");
        let annio = prompt("Ingresa el Año:");
        autos.push(new auto(marca,modelo,annio)); //Se van guardando al final, como fila de personas que va llegando

}

for (let i = 0; i < autos.length; i++){ //mientras i valga menos o igual que el arreglo, se imprimira su indice
    console.log(autos[i]);
}









/* var autoNuevo = new auto("Kia","Rio", 2017);
var autoNuevo2 = new auto("Kia","Forte", 2020);
var autoNuevo3 = new auto("Kia","Solara", 2026);
 */