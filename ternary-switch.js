//if ternario

let fruta = 'Manzana';

let resultado = fruta == 'Manzana' ? 'Buenísimo' : 'Uff, que pena';

console.log(resultado);

//switch

let semaforo = 'Rojo';

switch(semaforo){
  case 'Verde':
    console.log('Puedo cruzar');
    break;

  case 'Amarillo':
    console.log('Precaución');
    break;
  
  case 'Rojo':
    console.log('No cruces');
    break;

  default:
    console.log('No funciona el semáforo');
}



function tengoClases(dia) {
	switch (dia) {	
        case 'lunes':
            console.log('tenés clases');
            break;

        case 'miércoles':
            console.log('tenés clases');
            break;

        case 'viernes':
            console.log('tenés clases');
            break;

        default:
            console.log('no tenés clases');
            break;
    }
}

tengoClases('jueves');



//Ternary example
let bicicletaA = {
  rodado: 18,
  marca: "Mountain Bike"
}
let bicicletaB = {
  rodado: 24,
  marca: "Aurora"
}

let bicicletaConRodadoGrande = (bicicletaA.rodado > bicicletaB.rodado) ? bicicletaA : bicicletaB;

console.log("La bicicleta con  mayor rodado es la "+ bicicletaConRodadoGrande.marca );

console.log('-------------------')
//Otraaa
