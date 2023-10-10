let miAuto = {
    marca: "Kia",
    modelo: "Rio",
    annio: 2017,
    detalleDelAuto: function (){ //una propiedad que es una funcion se llama "metodos de objetos"
        console.log(`Auto ${this.marca} ${this.modelo} ${this.annio}`) //"this" hace referencia a su padre, al objeto
    }
};

miAuto.detalleDelAuto();