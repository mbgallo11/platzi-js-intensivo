let estudiantes = ["Maria","Sergio","Rosa","Daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

//forma tradicional
//for (let i = 0; i < estudiantes.length; i++){
//    saludarEstudiantes(estudiantes[i]);


//metodo 2: for of, declarar un singular de una variable plural
for (let estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}