let curso = {
  cantidadDeAlumnos: 32,
  docentes: ["Nacho", "Javi"],
  horario: 'de 19 a 21 hs.',
  notificaciones: function(){
    return "El horario de la cursada es " + this.horario;
  }
}

//this.horario es lo mismo que curso.horario

// console.log("La cantidad de alumnos es de ",curso.cantidadDeAlumnos);

// console.log("La cantidad de alumnos es de " + curso.cantidadDeAlumnos);

//Ejecutando la accion que es parte del método.
console.log(curso.notificaciones());


/***************/
/**Constructor**/
/***************/

function Curso(cantidadDeAlumnos,docentes,horario){
  this.cantidadDeAlumnos = cantidadDeAlumnos;
  this.docentes = docentes;
  this.horario = horario;
}

//Instanciando un nuevo curso

let programacion = new Curso(23,['Nacho', 'Javier'], 'de 07 a 10 am');
console.log(programacion);

//Instanciando otros cursos

let marketing = new Curso(15,['Laura', 'Cristina'], 'de 19 a 21 am');
console.log(marketing);