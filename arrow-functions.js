// Un solo parametro
let laMitad = numero => numero/2;

console.log(laMitad(8));

// Mas de un parametro
let dividir = (numeroA, numeroB) => numeroA / numeroB;

console.log(dividir(20,4));

let tengoQueTrabajar = dia => {
  if(dia == 'Sabado' || dia == 'Domingo'){
    return 'No tienes que trabajar';
  }else{
    return 'Si, tienes que trabajar';
  }
}

console.log(tengoQueTrabajar('lunes'))