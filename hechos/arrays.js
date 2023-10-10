let frutas = ["manzana","platano","cereza","fresa"];

//push añade elementos al final del arreglo
let masFrutas = frutas.push("uvas");

//pop elimina el ultimo elemento del arreglo
let ultimo = frutas.pop("");

//unshift - agrega un elemento al inicio
let nuevaLongitud = frutas.unshift("uvas");

//shift - elimina el primer elemento del arreglo
let borrarFruta = frutas.shift("")

//Para poder buscar una posicion en el arreglo
let posicion = frutas.indexOf("cereza")

console.log(frutas);
console.log(posicion);