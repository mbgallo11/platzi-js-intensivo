let estudiantes = ["Maria","Sergio","Rosa","Daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

while (estudiantes.length > 0) {
    let estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}


//Ejercicio:
/* while (deathCount > 0) {
    estudiantes.pop();
    deathCount--;
  }
  estudiantes.push(nuevo);
  return estudiantes; */