let articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "Television", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700},
];

//filter: ayuda a filtrar los elementos del arreglo, metiendolos en un nuevo array
let articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
})

//map: crea un nuevo array que mapea una propiedad de un objeto(ej. nombre)
let nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
})

//find: valida true o false, si existe lo trae y viceversa
let encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Bici"
})

//forEach: No genera un nuevo array, solo lo filtra
articulos.forEach(function(articulo){
    console.log(articulo.nombre)
})

//some: Hace una validacion y genera un nuevo array con el resultado de la validacion. 
//Parecido a find pero genera una variable con valor "true" or "false"
let articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
})

/* export function solution(cars) {
    let carFiltrado = cars.find(function (car) {
    if (car.licensePlate !== null || car.licensePlate !== undefined) {
        return cars;
    } else {
        return false;
    
    });
}
 */


